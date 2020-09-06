import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      margin: 0,
    },
  }),
  {
    classNamePrefix: 'loading',
  }
);

const Loading: FunctionComponent = () => {
  const classes = useStyles();

  return <h1 className={classes.root}>&#8230;</h1>;
};
export default Loading;
