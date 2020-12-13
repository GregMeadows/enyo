import React, { FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface GlitchProps {
  rows?: number;
  className?: string;
}

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
    },
    inner: {
      position: 'absolute',
      overflow: 'hidden',
    },
    hidden: {
      visibility: 'hidden',
    },
  }),
  {
    classNamePrefix: 'svg-path-on-view',
  }
);

const Glitch: FunctionComponent<GlitchProps> = ({
  rows = 8,
  children,
  className,
}) => {
  const classes = useStyles();
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    async function animate() {
      await Promise.all([animation.start('after'), animation.start('post')]);
      setAnimationComplete(true);
    }
    if (inView) {
      animate();
    }
  }, [animation, inView]);

  const numbers: number[] = [];
  const startingXValue: number[] = [];

  const variants = {
    before: (i: number) => ({
      x: startingXValue[i],
      opacity: 0,
      textShadow: '4px 0 magenta, -4px 0 cyan',
    }),
    after: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 2.5,
        mass: 0.1,
        velocity: 500,
        delay: numbers[i],
      },
    }),
    post: {
      textShadow: '0px 0 magenta, -0px 0 cyan',
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  const items = [];
  for (let i = 0; i < rows; i++) {
    // Random Delay
    const delay = Math.random() * rows + 1;
    numbers.push(0.3 + delay * 0.03);

    // Random x distance 50-100 with a 50% chance to be negated
    const xStart =
      (Math.random() * 50 + 50) * (Math.round(Math.random()) ? 1 : -1);
    startingXValue.push(xStart);

    const rowHeight = 100 / rows;
    const rowTop = rowHeight * i;
    items.push(
      <motion.div
        key={i}
        custom={i}
        variants={variants}
        className={classes.inner}
        style={{
          clipPath: `inset(${rowTop}% 0 ${100 - rowHeight - rowTop}% 0)`,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={viewRef}
      animate={animation}
      initial="before"
      className={clsx(classes.root, className)}
    >
      {!animationComplete && items}
      <div className={clsx(!animationComplete && classes.hidden)}>
        {children}
      </div>
    </motion.div>
  );
};

export default Glitch;
