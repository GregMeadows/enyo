import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  {
    classNamePrefix: 'loading',
  }
);

const Loading: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo size="large" />
    </div>
  );
};
export default Loading;
