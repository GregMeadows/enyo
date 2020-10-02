import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { LinkedItem } from './types';

interface NavButtonsType {
  items: LinkedItem[];
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      padding: theme.spacing(1),
      '& > :not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
  }),
  {
    classNamePrefix: 'nav-buttons',
  }
);

const NavButtons: FunctionComponent<NavButtonsType> = observer(({ items }) => {
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
});

export default NavButtons;
