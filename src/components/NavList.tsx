import {
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BREAKPOINT_MOBILE } from '../assets/consts';
import { LinkedItem } from '../types';
import Expand from './Expand';
import WingedBorder from './WingedBorder';

interface NavListProps {
  title: string;
  items: LinkedItem[];
  className?: string;
}

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      width: '100%',
    },
    title: {
      fontSize: '1.6rem',
    },
    wing: {
      marginBottom: '-0.6rem',
    },
    listText: {
      marginTop: 0,
      marginBottom: 0,
    },
    text: {
      fontSize: '0.9rem',
    },
  }),
  {
    classNamePrefix: 'nav-list',
  }
);

const NavList: FunctionComponent<NavListProps> = ({
  title,
  items,
  className,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));

  const navList = (
    <List dense component="nav">
      {items.map((item) => {
        const isLink = item.link.startsWith('http');
        return (
          <ListItem
            button
            key={item.text}
            component={isLink ? 'a' : RouterLink}
            to={isLink ? undefined : item.link}
            href={isLink ? item.link : undefined}
            disableGutters
          >
            <ListItemText className={classes.listText} disableTypography>
              <Typography
                variant="body2"
                className={classes.text}
                component="span"
              >
                {item.text}
              </Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );

  if (isMobile) {
    return <Expand title={title}>{navList}</Expand>;
  }

  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <WingedBorder right direction="down" className={classes.wing} />
      {navList}
    </div>
  );
};

export default NavList;
