import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BREAKPOINT_MOBILE } from '../assets/consts';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.default,
      width: '100%',
      overflowX: 'hidden',
      minHeight: '100%',
      marginTop: 0,
      paddingBottom: '2rem',
    },
    bottom: {
      width: '100%',
      height: '8rem',
      background: `linear-gradient(
        ${theme.palette.background.default},
        rgba(255,255,255,0)
      )`,
      marginBottom: 300,
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        marginBottom: 380,
      },
    },
  }),
  {
    classNamePrefix: 'layout',
  }
);

const Layout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.root} mui-fixed`}>{children}</div>
      <div className={classes.bottom} />
    </>
  );
};

export default Layout;
