import React, { FunctionComponent, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import checkIfInView from '../assets/Utils';

interface ImageScrollerProps {
  image: string;
  offsetX?: number;
  offsetY?: number;
  className?: string;
  classes?: {
    foreground?: string;
  };
  invert?: boolean;
}

interface StyleProps {
  image: string;
  offsetX: number;
  offsetY: number;
}

const useStyles = makeStyles(
  () => ({
    background: {
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      backgroundImage: (props: StyleProps) => `url(${props.image})`,
      backgroundPositionY: (props: StyleProps) => props.offsetY,
      backgroundPositionX: (props: StyleProps) => `${props.offsetX}%`,
      transition: 'background-position 0.2s ease-out',
    },
    foreground: {
      transition: 'margin 0.2s ease-out',
    },
  }),
  {
    classNamePrefix: 'image-scroller',
  }
);

const ImageScroller: FunctionComponent<ImageScrollerProps> = ({
  image,
  offsetY = -50,
  offsetX = 50,
  className,
  children,
  classes,
  invert,
}) => {
  const styleProps: StyleProps = {
    image,
    offsetY,
    offsetX,
  };
  const classesInternal = useStyles(styleProps);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        // Only animate if image is on screen
        if (checkIfInView(backgroundRef)) {
          backgroundRef.current.style.backgroundPositionY = `${
            offsetY + (window.pageYOffset * (invert ? 1 : -1)) / 10
          }px`;
          if (foregroundRef.current) {
            foregroundRef.current.style.marginTop = `${
              (window.pageYOffset * (invert ? -1 : 1)) / 5
            }px`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [invert, offsetY]);

  return (
    <div
      ref={backgroundRef}
      className={clsx(classesInternal.background, className)}
    >
      {children && (
        <div
          ref={foregroundRef}
          className={clsx(classesInternal.foreground, classes?.foreground)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageScroller;
