import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';

interface StyledButtonProps {
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      display: 'inline-flex',
    },
    buttonContainer: {
      position: 'relative',
      display: 'flex',
      margin: '10px 0 10px 10px',
    },
    svg: {
      position: 'absolute',
      stroke: theme.palette.primary.main,
      strokeWidth: 3,
      fill: 'none',
      height: '100%',
      width: '100%',
    },
    button: {
      borderRadius: 0,
      margin: '1px 4px',
      clipPath: 'polygon(0 0, 84% 0, 100% 30%, 100% 100%, 0 100%)',
      padding: '0.6rem 3.2rem',
      fontSize: '1.1rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        fontSize: '1rem',
        padding: '0.6rem 3rem',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        fontSize: '1rem',
        padding: '0.6rem 2.8rem',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        fontSize: '0.9rem',
        padding: '0.5rem 2.5rem',
      },
    },
    label: {
      pointerEvents: 'none',
      color: theme.palette.text.primary,
    },
  }),
  {
    classNamePrefix: 'styled-button',
  }
);

const StyledButton: FunctionComponent<StyledButtonProps> = ({
  disabled,
  onClick,
  href,
  children,
}) => {
  const classes = useStyles();
  const animation = useAnimation();
  const [hover, setHover] = useState(false);

  let linkProps;
  if (href) {
    linkProps = {
      component: RouterLink,
      to: href,
    };
  }

  useEffect(() => {
    if (hover) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, hover]);

  const pathVariants = {
    hidden: {
      clipPath: 'polygon(50% 50%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)',
    },
    visible: {
      clipPath: [
        'polygon(50% 50%, 100% 0, 100% 0%  , 100% 0%  , 100% 0%  , 100% 0%  )',
        'polygon(50% 50%, 100% 0, 100% 100%, 100% 100%, 100% 100%, 100% 100%)',
        'polygon(50% 50%, 100% 0, 100% 100%, 0%   100%, 0%   100%, 0%   100%)',
        'polygon(50% 50%, 100% 0, 100% 100%, 0%   100%, 0%   0%  , 0%   0%  )',
        'polygon(50% 50%, 100% 0, 100% 100%, 0%   100%, 0%   0%  , 100% 0%  )',
      ],
    },
  };

  return (
    <div className={classes.root}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={classes.svg}
        variants={pathVariants}
        animate={animation}
        initial="hidden"
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M99 98 L 2 98 L 2 45 L 20 2"
        />
      </motion.svg>
      <div className={classes.buttonContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={classes.svg}
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M1 2 L 84 2 L 99 30 L 99 98 L 1 98 L 1 0"
          />
        </svg>
        <Button
          classes={{
            root: classes.button,
            label: classes.label,
          }}
          variant="text"
          color="primary"
          disabled={disabled}
          fullWidth
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          onClick={onClick}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...linkProps}
        >
          {children}
        </Button>
      </div>
    </div>
  );
};
export default StyledButton;
