import React, { FunctionComponent, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { OnViewChildProps } from './OnView';

interface CenterRevealProps extends OnViewChildProps {
  className?: string;
}

const CenterReveal: FunctionComponent<CenterRevealProps> = ({
  show,
  className,
  delay,
  children,
}) => {
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

  const variants = {
    hidden: {
      opacity: 0.5,
      clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      transition: { duration: 0.4, ease: 'easeOut' },
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

export default CenterReveal;
