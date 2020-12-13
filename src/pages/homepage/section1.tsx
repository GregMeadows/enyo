import React, { FunctionComponent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Glitch from '../../components/onView/Glitch';
import WingedBorder from '../../components/WingedBorder';
import { isLightMode } from '../../stores/settings';
import FadeUp from '../../components/onView/FadeUp';
import OnView from '../../components/onView/OnView';
import { BREAKPOINT_TABLET } from '../../assets/consts';
import enyoProHomeFrontImg from '../../images/clothing/enyo/pro/home.front.png';
import enyoProAwayFrontImg from '../../images/clothing/enyo/pro/away.front.png';
import { ReactComponent as Hex } from '../../images/hex.svg';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '2rem 0',
      position: 'relative',
    },
    rotated: {
      display: 'inline-flex',
      alignItems: 'baseline',
      textTransform: 'uppercase',
      transform: 'rotate(-90deg) translate(-50%, 20%)',
      transformOrigin: '0 0',
      position: 'absolute',
      left: 0,
    },
    rotatedContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    titleContainer: {
      margin: '2rem 4vw',
    },
    title: {
      lineHeight: '60%',
    },
    kitInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '10vw',
      paddingRight: '3vw',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        order: 1,
        padding: '2rem 6vw',
      },
    },
    kitInfo: {
      position: 'relative',
    },
    kitInfoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      padding: '50px 6vw 50px 3vw',
    },
    kitInfoText: {
      fontSize: '1.3rem',
    },
    svg: {
      display: 'block',
      position: 'absolute',
      fill: 'none',
      stroke: theme.palette.secondary.main,
      strokeWidth: PATH_SIZE,
    },
    kitItem: {
      paddingTop: '4vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    hex: {
      display: 'block',
      position: 'absolute',
      fill: theme.palette.secondary.main,
      height: 70,
      width: 70,
      left: '41%',
      top: '36%',
    },
  }),
  {
    classNamePrefix: 'svg-path-on-view',
  }
);

const Section1: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const animation = useAnimation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  const delays = [0.5, 0.7, 1.3, 1.8, 2.4];
  const durations = [0.2, 0.6, 0.5, 0.6, 0.3];

  /**
   * This consists of multiple SVG elements so that no parts of the SVG distort as teh screen width changes.
   * This would usually be done using:
   *   vectorEffect: 'non-scaling-stroke'
   * However this is not currently supported by Framer Motion and distorts the entrance animation of the SVG.
   * See: https://github.com/framer/motion/issues/521
   */
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: (i: number) => ({
      pathLength: 1,
      transition: {
        delay: delays[i],
        duration: durations[i],
        ease: 'linear',
      },
    }),
  };

  return (
    <section className={classes.info} ref={viewRef}>
      <Glitch show={inView} className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.kit.title')}
        </Typography>
      </Glitch>
      <WingedBorder right direction="down" length={85} />
      <Grid container>
        <Grid item className={classes.rotatedContainer}>
          <div className={classes.rotated}>
            <Typography variant="subtitle1">
              {t('pages.homepage.kit.rotated')}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.kitInfoContainer}>
          <div className={classes.kitInfo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 50"
              className={classes.svg}
              style={{
                height: 50,
                left: '85%',
              }}
            >
              <motion.path
                d="M38 48 L 0 0"
                initial="hidden"
                animate={animation}
                variants={pathVariants}
                custom={0}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              className={classes.svg}
              style={{
                height: PATH_SIZE,
                width: '85%',
              }}
            >
              <motion.path
                d="M100 0 H 0"
                initial="hidden"
                animate={animation}
                variants={pathVariants}
                custom={1}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2 100"
              preserveAspectRatio="none"
              className={classes.svg}
              style={{ height: '100%', width: PATH_SIZE }}
            >
              <motion.path
                d="M0 0 V 100"
                initial="hidden"
                animate={animation}
                variants={pathVariants}
                custom={2}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              className={classes.svg}
              style={{
                height: PATH_SIZE,
                width: '100%',
                bottom: 0,
              }}
            >
              <motion.path
                d="M0 0 H 100"
                initial="hidden"
                animate={animation}
                variants={pathVariants}
                custom={3}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2 100"
              preserveAspectRatio="none"
              className={classes.svg}
              style={{ height: '30%', width: PATH_SIZE, right: 0, bottom: 0 }}
            >
              <motion.path
                d="M0 100 V 0"
                initial="hidden"
                animate={animation}
                variants={pathVariants}
                custom={4}
              />
            </svg>
            <div className={classes.kitInfoTextContainer}>
              <Typography
                variant="body1"
                paragraph
                className={classes.kitInfoText}
              >
                {t('pages.homepage.kit.text.1')}
              </Typography>
              <Typography variant="body1" className={classes.kitInfoText}>
                {t('pages.homepage.kit.text.2')}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.kitItem}>
          <Hex className={classes.hex} />
          <OnView component={FadeUp}>
            <img
              src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
              alt={t('pages.homepage.kit.front')}
            />
          </OnView>
        </Grid>
      </Grid>
    </section>
  );
};

export default Section1;
