import React, { FunctionComponent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { makeStyles, Theme } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';

interface SVGPathProps {
  className?: string;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    path: {
      fill: 'none',
      stroke: theme.palette.primary.main,
      strokeWidth: 3,
    },
    svg: {
      height: 200,
      width: '80vw',
    },
  }),
  {
    classNamePrefix: 'svg-path-on-view',
  }
);

const SVGPath: FunctionComponent<SVGPathProps> = ({ className }) => {
  const classes = useStyles();
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div ref={viewRef} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
        className={classes.svg}
      >
        <motion.path
          d="M2 2 V 196 H 496"
          className={classes.path}
          initial="hidden"
          animate={animation}
          variants={pathVariants}
        />
      </svg>
    </div>
  );
};

export default SVGPath;
