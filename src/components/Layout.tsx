import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      width: '100%',
      overflowX: 'hidden',
      minHeight: '100%',
      paddingBottom: '2rem',
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
