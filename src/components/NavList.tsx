import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItemText, ListItem } from '@material-ui/core';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { LinkedItem } from '../types';
import WingedBorder from './WingedBorder';

interface NavListType {
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
    wing: {
      marginTop: '-1rem',
    },
  }),
  {
    classNamePrefix: 'nav-list',
  }
);

const NavList: FunctionComponent<NavListType> = observer(
  ({ title, items, className }) => {
    const classes = useStyles();

    return (
      <div className={clsx(classes.root, className)}>
        <Typography variant="h6">{title}</Typography>
        <WingedBorder
          direction="up"
          position="right"
          className={classes.wing}
        />
        <List dense>
          {items.map((item) => (
            <ListItem key={item.text}>
              <ListItemText>
                <Link to={item.link}>{item.text}</Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
);

export default NavList;
