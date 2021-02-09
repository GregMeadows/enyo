import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    file: {},
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const Confirm: FunctionComponent = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};
export default Confirm;
