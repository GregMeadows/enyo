import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const length = images.length - 1;
      setImageIndex((prevIndex) =>
        prevIndex === length ? prevIndex - length : prevIndex + 1
      );
    }, delay);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, images.length]);

  return (
    <div className={clsx(classes.root, className)}>
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
