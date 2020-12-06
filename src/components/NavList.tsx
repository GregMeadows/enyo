import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItemText,
  ListItem,
  Link,
} from '@material-ui/core';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedItem } from '../types';
import WingedBorder from './WingedBorder';
import { BREAKPOINT_MOBILE } from '../assets/consts';

interface NavListProps {
  title: string;
  items: LinkedItem[];
  className?: string;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      width: '100%',
    },
    title: {
      paddingLeft: theme.spacing(2),
    },
    wing: {
      marginTop: '-0.8rem',
    },
    listText: {
      marginTop: 0,
      marginBottom: 0,
    },
    listLink: {
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        fontSize: '0.9rem',
      },
    },
    listItem: {
      paddingRight: 0,
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  }),
  {
    classNamePrefix: 'nav-list',
  }
);

const NavList: FunctionComponent<NavListProps> = observer(
  ({ title, items, className }) => {
    const classes = useStyles();

    return (
      <div className={clsx(classes.root, className)}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <WingedBorder right direction="up" className={classes.wing} />
        <List dense>
          {items.map((item) => (
            <ListItem key={item.text} className={classes.listItem}>
              <ListItemText className={classes.listText}>
                <Link
                  component={RouterLink}
                  to={item.link}
                  className={classes.listLink}
                >
                  {item.text}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
);

export default NavList;
