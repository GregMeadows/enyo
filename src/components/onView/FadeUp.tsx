import React, { FunctionComponent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface FadeUpType {
  className?: string;
}

const FadeUp: FunctionComponent<FadeUpType> = ({ className, children }) => {
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <motion.div
      ref={viewRef}
      animate={animation}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
