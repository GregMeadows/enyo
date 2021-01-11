import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(
  () => ({
    rotatedContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    rotated: {
      display: 'inline-flex',
      alignItems: 'baseline',
      textTransform: 'uppercase',
      transform: 'rotate(-90deg) translate(-50%, 20%)',
      transformOrigin: '0 0',
      position: 'absolute',
      left: 0,
    },
  }),
  {
    classNamePrefix: 'rotated-grid-text',
  }
);

const RotatedGridText: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.rotatedContainer}>
      <div className={classes.rotated}>
        <Typography variant="subtitle1">{children}</Typography>
      </div>
    </Grid>
  );
};

export default RotatedGridText;
