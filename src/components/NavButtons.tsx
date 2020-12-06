import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Button, IconButton, Tooltip, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LinkedItem } from '../types';
import { BREAKPOINT_MOBILE } from '../assets/consts';

interface NavButtonsProps {
  items: LinkedItem[];
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      '& > :not(:last-child)': {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
          marginRight: 0,
        },
      },
    },
  }),
  {
    classNamePrefix: 'nav-buttons',
  }
);

const NavButtons: FunctionComponent<NavButtonsProps> = ({ items }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));

  return (
    <nav className={classes.root}>
      {items.map((item) => {
        if (item.fallbackIcon && isMobile) {
          return (
            <Tooltip title={item.text} key={item.text}>
              <IconButton
                component={Link}
                to={item.link}
                aria-label={item.text}
              >
                {item.fallbackIcon}
              </IconButton>
            </Tooltip>
          );
        }
        return (
          <Button
            component={Link}
            variant="text"
            to={item.link}
            key={item.text}
            size="large"
          >
            {item.text}
          </Button>
        );
      })}
    </nav>
  );
};

export default NavButtons;
