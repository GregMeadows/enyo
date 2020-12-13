import React, { FunctionComponent, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { OnViewChildProps } from './OnView';

interface FadeUpProps extends OnViewChildProps {
  className?: string;
}

const FadeUp: FunctionComponent<FadeUpProps> = ({
  show,
  className,
  children,
}) => {
  const animation = useAnimation();

  useEffect(() => {
    if (show) {
      animation.start('visible');
    }
  }, [animation, show]);

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
