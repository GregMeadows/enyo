import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { BREAKPOINT_MOBILE } from '../assets/consts';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.default,
      width: '100%',
      overflowX: 'hidden',
      minHeight: '100%',
      marginTop: 0,
      marginBottom: 300,
      padding: '3rem 10vw 10rem',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '5rem 8vw',
      },
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
