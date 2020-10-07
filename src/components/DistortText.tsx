import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// eslint-disable-next-line no-restricted-imports
import { Variant } from '@material-ui/core/styles/createTypography';
import clsx from 'clsx';

interface DistortTextType {
  text: string;
  variant?: Variant;
  className?: string;
}

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
    },
    '@keyframes distort-before': {
      '0%': {
        clipPath:
          'polygon(0 0, 0 0, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 0%)',
      },
      '25%': {
        clipPath:
          'polygon(0 0, 0 45%, 100% 45%, 100% 55%, 0 55%, 0 100%, 100% 100%, 100% 0%)',
      },
      '50%': {
        clipPath:
          'polygon(0 0, 0 100%, 100% 100%, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
      },
      '100%': {
        clipPath:
          'polygon(0 0, 0 100%, 100% 100%, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
      },
    },
    '@keyframes distort-after': {
      '0%': {
        clipPath: 'inset(0% 0 100% 0)',
      },
      '25%': {
        clipPath: 'inset(45% 0 45% 0)',
      },
      '50%': {
        clipPath: 'inset(100% 0 0% 0)',
      },
      '100%': {
        clipPath: 'inset(100% 0 0% 0)',
      },
    },
    text: {
      position: 'relative',
      color: 'rgba(0,0,0,0)',
      '&::before, &::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
      '&::before': {
        color: 'white',
        textShadow: '-1px 0 black',
        animation: '$distort-before 2s infinite linear',
      },
      '&::after': {
        left: -3,
        color: 'white',
        textShadow: '1px 0 blue',
        animation: '$distort-after 2s infinite linear',
      },
    },
  }),
  {
    classNamePrefix: 'glitch-text',
  }
);

const DistortText: FunctionComponent<DistortTextType> = ({
  text,
  variant,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant={variant || 'body1'}
        data-text={text}
        className={clsx(classes.text, className)}
      >
        {text}
      </Typography>
    </div>
  );
};
export default DistortText;
