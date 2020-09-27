import React, { FunctionComponent, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface ImageScrollerType {
  image: string;
  offset?: number;
  className?: string;
}

interface StyleProps {
  image: string;
  offset?: number;
}

const useStyles = makeStyles(
  () => ({
    background: {
      height: '100%',
      width: '100%',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      backgroundImage: (props: StyleProps) => `url(${props.image})`,
      backgroundPositionY: (props: StyleProps) => props.offset,
    },
  }),
  {
    classNamePrefix: 'image-scroller',
  }
);

const ImageScroller: FunctionComponent<ImageScrollerType> = ({
  image,
  offset,
  className,
  children,
}) => {
  const startingOffset = offset || -50;
  const styleProps: StyleProps = {
    image,
    offset: startingOffset,
  };
  const classes = useStyles(styleProps);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        if (backgroundRef.current.getBoundingClientRect().bottom > 0) {
          backgroundRef.current.style.backgroundPositionY = `${
            startingOffset + Math.round(window.pageYOffset / 6)
          }px`;
          if (foregroundRef.current) {
            foregroundRef.current.style.marginTop = `${Math.round(
              window.pageYOffset / 2
            )}px`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startingOffset]);

  return (
    <div ref={backgroundRef} className={clsx(classes.background, className)}>
      {children && <div ref={foregroundRef}>{children}</div>}
    </div>
  );
};

export default ImageScroller;
