import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useDencrypt } from 'use-dencrypt-effect';

interface RotatedGridTextProps {
  show: boolean;
  text: string;
}

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

const RotatedGridText: FunctionComponent<RotatedGridTextProps> = ({
  show,
  text,
}) => {
  const classes = useStyles();
  const { result, dencrypt } = useDencrypt();
  const [complete, setCompelte] = useState(false);

  useEffect(() => {
    if (!complete && show) {
      dencrypt(text);
      setCompelte(true);
    }
  }, [complete, dencrypt, show, text]);

  return (
    <Grid item className={classes.rotatedContainer}>
      <div className={classes.rotated}>
        <Typography variant="subtitle1">{result}</Typography>
      </div>
    </Grid>
  );
};

export default RotatedGridText;
