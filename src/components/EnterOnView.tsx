import React, { FunctionComponent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface EnterOnViewType {
  className?: string;
}

const EnterOnView: FunctionComponent<EnterOnViewType> = ({
  className,
  children,
}) => {
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.8,
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
      transition: { duration: 0.4, delayChildren: 1, staggerChildren: 1 },
    },
    hidden: {
      y: 40,
      opacity: 0,
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

export default EnterOnView;
