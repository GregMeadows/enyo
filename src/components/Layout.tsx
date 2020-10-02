import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.default,
      width: '100%',
      overflowX: 'hidden',
      minHeight: '100%',
      marginTop: 0,
      marginBottom: 300,
      paddingBottom: '8rem',
    },
  }),
  {
    classNamePrefix: 'layout',
  }
);

const Layout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <div className={`${classes.root} mui-fixed`}>{children}</div>;
};

export default Layout;
