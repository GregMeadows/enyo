import React, { FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface TextGlitchProps {
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

const TextGlitch: FunctionComponent<TextGlitchProps> = ({
  children,
  className,
}) => {
  const numbers: number[] = [];
  const directions: number[] = [];
  const width = 100;
  const rowNum = 8;

  const classes = useStyles();
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    async function animate() {
      await animation.start('after');
      setAnimationComplete(true);
    }
    if (inView) {
      animate();
    }
  }, [animation, inView]);

  while (numbers.length < rowNum) {
    const j = Math.floor(Math.random() * rowNum) + 1;
    const k = Math.round(Math.random()) * 2 - 1;
    // Make sure that the number is unique
    if (numbers.indexOf(j) === -1) {
      numbers.push(j);
    }
    directions.push(k);
  }

  const variants = {
    before: (i: number) => ({
      x: -width * directions[i],
      opacity: 0,
    }),
    after: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 2.5,
        mass: 0.1,
        velocity: 300,
        delay: 0.2 + numbers[i] * 0.04,
      },
    }),
  };

  const items = [];
  for (let i = 0; i < rowNum; i++) {
    const rowHeight = 100 / rowNum;
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

export default TextGlitch;
