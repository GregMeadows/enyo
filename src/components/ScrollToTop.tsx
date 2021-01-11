import {
  Fab,
  makeStyles,
  Theme,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import React, { useEffect, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
      zIndex: 1000,
      opacity: 0.9,
    },
  }),
  {
    classNamePrefix: 'scroll-to-top',
  }
);

const ScrollToTop: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { pathname, search } = useLocation();

  function scrollUp() {
    try {
      // Smooth scrolling
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }

  // Scroll to top on page change
  useEffect(() => {
    scrollUp();
  }, [pathname, search]);

  // Scroll to top button
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    scrollUp();
  };

  return (
    <Zoom in={trigger}>
      <Fab
        size="medium"
        aria-label={t('nav.top')}
        onClick={handleClick}
        className={classes.root}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
