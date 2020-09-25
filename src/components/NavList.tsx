import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, List, ListItemText, ListItem } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export interface LinkedItem {
  text: string;
  link: string;
}

interface NavListType {
  title: string;
  items: LinkedItem[];
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    title: {
      borderBottom: `3px solid ${theme.palette.border.dark}`,
    },
  }),
  {
    classNamePrefix: 'nav-list',
  }
);

const NavList: FunctionComponent<NavListType> = observer(({ title, items }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <List dense>
        {items.map((item) => (
          <ListItem key={item.text}>
            <ListItemText>
              <Link to={item.link}>{item.text}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
});

export default NavList;
