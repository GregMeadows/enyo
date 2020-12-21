import React, { FunctionComponent, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { OnViewChildProps } from './OnView';

export enum PathDirection {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  RIGHT_DOWN = 'RIGHT_DOWN',
}

export interface SVGParams {
  id: string;
  direction: PathDirection;
  duration: number;
  style: React.CSSProperties;
  reverseAnimation?: boolean;
}

interface SVGPathProps extends OnViewChildProps {
  paths: SVGParams[];
}

const PATH_VIEWBOX: { [key in PathDirection]: string } = {
  HORIZONTAL: '100 2',
  VERTICAL: '2 100',
  RIGHT_DOWN: '40 50',
};

const PATH_D: { [key in PathDirection]: string } = {
  HORIZONTAL: 'M0 0 H 100',
  VERTICAL: 'M0 0 V 100',
  RIGHT_DOWN: 'M0 0 L 38 48',
};

const PATH_D_REVERSED: { [key in PathDirection]: string } = {
  HORIZONTAL: 'M100 0 H 0',
  VERTICAL: 'M0 100 V 0',
  RIGHT_DOWN: 'M38 48 L 0 0',
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    svg: {
      display: 'block',
      position: 'absolute',
      fill: 'none',
      stroke: theme.palette.primary.main,
      strokeWidth: 4,
    },
  }),
  {
    classNamePrefix: 'svg-paths',
  }
);

/**
 * This consists of multiple SVG elements so that no parts of the SVG distort as teh screen width changes.
 * This would usually be done using:
 *   vectorEffect: 'non-scaling-stroke'
 * However this is not currently supported by Framer Motion and distorts the entrance animation of the SVG.
 * See: https://github.com/framer/motion/issues/521
 */
const SVGPaths: FunctionComponent<SVGPathProps> = ({ show, paths, delay }) => {
  const classes = useStyles();
  const animation = useAnimation();

  useEffect(() => {
    if (show) {
      window.setTimeout(
        () => {
          animation.start('visible');
        },
        delay ? delay * 1000 : undefined
      );
    }
  }, [animation, delay, show]);

  let totalAnimationDelay = 0;

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: (i: number) => {
      const animationDuration = paths[i].duration;
      const animationDelay = totalAnimationDelay;
      totalAnimationDelay += animationDuration;

      let ease = 'linear';
      if (i === 0) {
        ease = 'easeIn';
      } else if (i === paths.length - 1) {
        ease = 'easeOut';
      }

      return {
        pathLength: 1,
        transition: {
          delay: animationDelay,
          duration: animationDuration,
          ease,
        },
      };
    },
  };

  const render = paths.map((path: SVGParams, i) => {
    const { id, direction, style, reverseAnimation } = path;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${PATH_VIEWBOX[direction]}`}
        preserveAspectRatio="none"
        className={classes.svg}
        style={style}
        key={id}
      >
        <motion.path
          d={reverseAnimation ? PATH_D_REVERSED[direction] : PATH_D[direction]}
          initial="hidden"
          animate={animation}
          variants={pathVariants}
          custom={i}
        />
      </svg>
    );
  });

  return <>{render}</>;
};

export default SVGPaths;
