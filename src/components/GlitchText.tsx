import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// eslint-disable-next-line no-restricted-imports
import { Variant } from '@material-ui/core/styles/createTypography';
import clsx from 'clsx';

interface GlitchTextType {
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
      '3%': {
        clipPath:
          'polygon(0 0, 0 10%, 100% 10%, 100% 20%, 0 20%, 0 100%, 100% 100%, 100% 0%)',
      },
      '5%': {
        clipPath:
          'polygon(0 0, 0 45%, 100% 45%, 100% 60%, 0 60%, 0 100%, 100% 100%, 100% 0%)',
      },
      '8%': {
        clipPath:
          'polygon(0 0, 0 25%, 100% 25%, 100% 30%, 0 30%, 0 100%, 100% 100%, 100% 0%)',
      },
      '11%': {
        clipPath:
          'polygon(0 0, 0 85%, 100% 85%, 100% 95%, 0 95%, 0 100%, 100% 100%, 100% 0%)',
      },
      '13%': {
        clipPath:
          'polygon(0 0, 0 75%, 100% 75%, 100% 90%, 0 90%, 0 100%, 100% 100%, 100% 0%)',
      },
      '15%': {
        clipPath:
          'polygon(0 0, 0 50%, 100% 50%, 100% 55%, 0 55%, 0 100%, 100% 100%, 100% 0%)',
      },
      '18%': {
        clipPath:
          'polygon(0 0, 0 35%, 100% 35%, 100% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)',
      },
      '20%': {
        clipPath:
          'polygon(0 0, 0 35%, 100% 35%, 100% 40%, 0 40%, 0 100%, 100% 100%, 100% 0%)',
      },
      '23%': {
        clipPath:
          'polygon(0 0, 0 85%, 100% 85%, 100% 95%, 0 95%, 0 100%, 100% 100%, 100% 0%)',
      },
      '25%': {
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
      '3%': {
        clipPath: 'inset(10% 0 80% 0)',
      },
      '5%': {
        clipPath: 'inset(45% 0 40% 0)',
      },
      '8%': {
        clipPath: 'inset(25% 0 70% 0)',
      },
      '11%': {
        clipPath: 'inset(85% 0 5% 0)',
      },
      '13%': {
        clipPath: 'inset(75% 0 10% 0)',
      },
      '15%': {
        clipPath: 'inset(50% 0 45% 0)',
      },
      '18%': {
        clipPath: 'inset(35% 0 50% 0)',
      },
      '20%': {
        clipPath: 'inset(35% 0 60% 0)',
      },
      '23%': {
        clipPath: 'inset(85% 0 5% 0)',
      },
      '25%': {
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
        animation: '$distort-before 5s infinite linear alternate',
      },
      '&::after': {
        left: -2,
        color: 'white',
        textShadow: '1px 0 red, -1px 0 blue',
        animation: '$distort-after 5s infinite linear alternate',
      },
    },
  }),
  {
    classNamePrefix: 'glitch-text',
  }
);

const GlitchText: FunctionComponent<GlitchTextType> = ({
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
export default GlitchText;
