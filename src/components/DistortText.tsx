import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
      animation: '$distort 200s infinite linear',
    },
    '@keyframes distort': {
      '11%': {
        clipPath:
          'polygon(0 0, 0 -1%, 100% -1%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 0)',
      },
      '12%': {
        clipPath:
          'polygon(0 0, 0 60%, 100% 60%, 100% 62%, 0 62%, 0 100%, 100% 100%, 100% 0)',
      },
      '13%': {
        clipPath:
          'polygon(0 0, 0 100%, 100% 100%, 100% 103%, 0 103%, 0 100%, 100% 100%, 100% 0%)',
      },
    },
  }),
  {
    classNamePrefix: 'distort',
  }
);

const Distort: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
export default Distort;
