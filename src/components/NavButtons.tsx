import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BREAKPOINT_TABLET } from '../assets/consts';
import { LinkedItem } from '../types';
import BorderLink from './BorderLink';
import Logo from './Logo';

interface NavButtonsProps {
  items: LinkedItem[];
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    list: {
      width: 300,
    },
    logo: {
      display: 'flex',
      justifyContent: ' center',
      paddingTop: '1.2rem',
      paddingBottom: '1rem',
    },
    close: {
      position: 'absolute',
      top: theme.spacing(1.5),
      right: theme.spacing(1.5),
    },
  }),
  {
    classNamePrefix: 'nav-buttons',
  }
);

const NavButtons: FunctionComponent<NavButtonsProps> = ({ items }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_TABLET));
  const [menuOpen, setMenuOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <Tooltip title={t('nav.menu') || ''}>
          <IconButton
            aria-label={t('nav.menu')}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <div
            role="presentation"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            <CloseIcon className={classes.close} />
            <div className={classes.logo}>
              <Logo size="small" type="text" />
            </div>
            <List className={classes.list}>
              {items.map((item) => {
                const isLink = item.link.startsWith('http');
                return (
                  <ListItem
                    button
                    component={isLink ? 'div' : Link}
                    to={isLink ? undefined : item.link}
                    href={isLink ? item.link : undefined}
                    key={item.text}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Drawer>
      </>
    );
  }

  return (
    <nav>
      {items.map((item) => (
        <BorderLink key={item.link} text={item.text} link={item.link} />
      ))}
    </nav>
  );
};

export default NavButtons;
