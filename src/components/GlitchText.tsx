import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// eslint-disable-next-line no-restricted-imports
import { Variant } from '@material-ui/core/styles/createTypography';
import clsx from 'clsx';

interface GlitchTextType {
  text: string;
  variant?: Variant;
  className?: string;
  classes?: {
    text?: string;
  };
  delay?: number;
}

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
    },
    '@keyframes glitch-before': {
      '0%': {
        clipPath:
          'polygon(0 0, 0 0, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 0%)',
      },
      '15%': {
        clipPath:
          'polygon(0 0, 0 0, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 0%)',
      },
      '20%': {
        clipPath:
          'polygon(0 0, 0 10%, 100% 10%, 100% 30%, 0 30%, 0 100%, 100% 100%, 100% 0%)',
      },
      '27%': {
        clipPath:
          'polygon(0 0, 0 45%, 100% 45%, 100% 60%, 0 60%, 0 100%, 100% 100%, 100% 0%)',
      },
      '35%': {
        clipPath:
          'polygon(0 0, 0 30%, 100% 30%, 100% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)',
      },
      '45%': {
        clipPath:
          'polygon(0 0, 0 85%, 100% 85%, 100% 95%, 0 95%, 0 100%, 100% 100%, 100% 0%)',
      },
      '56%': {
        clipPath:
          'polygon(0 0, 0 75%, 100% 75%, 100% 90%, 0 90%, 0 100%, 100% 100%, 100% 0%)',
      },
      '65%': {
        clipPath:
          'polygon(0 0, 0 50%, 100% 50%, 100% 60%, 0 60%, 0 100%, 100% 100%, 100% 0%)',
      },
      '74%': {
        clipPath:
          'polygon(0 0, 0 35%, 100% 35%, 100% 60%, 0 60%, 0 100%, 100% 100%, 100% 0%)',
      },
      '82%': {
        clipPath:
          'polygon(0 0, 0 35%, 100% 35%, 100% 40%, 0 40%, 0 100%, 100% 100%, 100% 0%)',
      },
      '90%': {
        clipPath:
          'polygon(0 0, 0 85%, 100% 85%, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
      },
      '95%': {
        clipPath:
          'polygon(0 0, 0 90%, 100% 90%, 100% 95%, 0 95%, 0 100%, 100% 100%, 100% 0%)',
      },
      '100%': {
        clipPath:
          'polygon(0 0, 0 100%, 100% 100%, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
      },
    },
    '@keyframes glitch-after': {
      '0%': {
        clipPath: 'inset(0% 0 100% 0)',
      },
      '15%': {
        clipPath: 'inset(0% 0 100% 0)',
      },
      '20%': {
        clipPath: 'inset(10% 0 70% 0)',
      },
      '27%': {
        clipPath: 'inset(45% 0 40% 0)',
      },
      '35%': {
        clipPath: 'inset(30% 0 50% 0)',
      },
      '45%': {
        clipPath: 'inset(85% 0 5% 0)',
      },
      '56%': {
        clipPath: 'inset(75% 0 10% 0)',
      },
      '65%': {
        clipPath: 'inset(50% 0 40% 0)',
      },
      '74%': {
        clipPath: 'inset(35% 0 40% 0)',
      },
      '82%': {
        clipPath: 'inset(35% 0 60% 0)',
      },
      '90%': {
        clipPath: 'inset(85% 0 0% 0)',
      },
      '95%': {
        clipPath: 'inset(90% 0 5% 0)',
      },
      '100%': {
        clipPath: 'inset(100% 0 0 0)',
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
        clipPath:
          'polygon(0 0, 0 0, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 0%)',
        animation: `$glitch-before 1.5s infinite linear alternate`,
      },
      '&::after': {
        left: -2,
        color: 'white',
        textShadow: '1px 0 magenta, -1px 0 cyan',
        clipPath: 'inset(0% 0 100% 0)',
        animation: `$glitch-after 1.5s infinite linear alternate`,
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
  classes,
  delay = 0,
}) => {
  const classesInternal = useStyles();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (delay > 0) {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, delay * 1000);
    }
  }, [delay]);

  return (
    <div className={clsx(classesInternal.root, className)}>
      <Typography
        variant={variant || 'body1'}
        data-text={text}
        className={clsx(show && classesInternal.text, classes?.text)}
      >
        {text}
      </Typography>
    </div>
  );
};
export default GlitchText;
