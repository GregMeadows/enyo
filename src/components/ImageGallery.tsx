import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
  delay?: number;
  className?: string;
}

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      position: 'absolute',
    },
  }),
  {
    classNamePrefix: 'nav-list',
  }
);

const ImageGallery: FunctionComponent<ImageGalleryProps> = ({
  images,
  delay = 4000,
  className,
}) => {
  const classes = useStyles();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });
  const [imageIndex, setImageIndex] = useState(0);
  const [intervalState, setIntervalState] = useState<number | null>(null);

  useEffect(() => {
    if (!inView && intervalState) {
      window.clearInterval(intervalState);
      setIntervalState(null);
    } else if (inView && !intervalState) {
      setIntervalState(
        window.setInterval(() => {
          const length = images.length - 1;
          setImageIndex((prevIndex) =>
            prevIndex === length ? prevIndex - length : prevIndex + 1
          );
        }, delay)
      );
    }

    return () => {
      if (intervalState) {
        window.clearInterval(intervalState);
      }
    };
  }, [delay, images.length, inView, intervalState]);

  return (
    <div ref={viewRef} className={clsx(classes.root, className)}>
      <AnimatePresence initial={false}>
        <motion.img
          key={images[imageIndex].src}
          src={images[imageIndex].src}
          alt={images[imageIndex].alt}
          className={classes.img}
          initial={{
            clipPath: 'polygon(50% -100%, 50% -100%, -100% 50%, -100% 50%)',
          }}
          animate={{
            clipPath: 'polygon(50% -100%, 200% 50%, 50% 200%, -100% 50%)',
            transition: { duration: 3, delay: 0.18 },
          }}
          exit={{
            clipPath: 'polygon(200% 50%, 200% 50%, 50% 200%, 50% 200%)',
            transition: { duration: 3 },
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
