import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LinkedItem } from '../types';
import { BREAKPOINT_MOBILE } from '../assets/consts';

interface NavButtonsType {
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

const NavButtons: FunctionComponent<NavButtonsType> = ({ items }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      {items.map((item) => (
        <Button
          component={Link}
          variant="text"
          to={item.link}
          key={item.text}
          size="large"
        >
          {item.text}
        </Button>
      ))}
    </nav>
  );
};

export default NavButtons;
