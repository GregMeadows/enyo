import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: '2rem 20vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '1.8rem 12vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '1.5rem 8vw',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '1.2rem 4vw',
      },
    },
  }),
  {
    classNamePrefix: 'info',
  }
);

const Main: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return <main className={classes.root}>{children}</main>;
};
export default Main;
