import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import WingedBorder from '../../components/WingedBorder';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../../assets/consts';
import SVGPaths, {
  SVGParams,
  PathDirection,
} from '../../components/onView/SVGPaths';
import { ReactComponent as NetSVG } from '../../images/sustain/net.svg';
import { ReactComponent as FactorySVG } from '../../images/sustain/factory.svg';
import { ReactComponent as JerseySVG } from '../../images/sustain/jersey.svg';
import BottomReveal from '../../components/onView/BottomReveal';
import RotatedGridText from '../../components/RotatedGridText';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '5rem 0',
      position: 'relative',
      background: theme.palette.background.default,
    },
    titleContainer: {
      margin: '1rem 4vw',
    },
    title: {
      lineHeight: '60%',
    },
    infoContainer: {
      padding: '8rem 10vw 4rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '4rem 6vw 2rem',
      },
    },
    svgContainer: {
      position: 'relative',
    },
    infoTextContainer: {
      padding: 'calc(40px + 5rem) 4vw 4rem 0',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        order: 1,
        padding: '3rem 6vw 6vw',
      },
    },
    infoText: {
      [theme.breakpoints.up(BREAKPOINT_LAPTOP)]: {
        fontSize: '1.3rem',
      },
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      padding: '0 4vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4vw 0',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '7rem 4vw 0',
      },
    },
    sustainIconContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    sustainIcons: {
      fill: theme.palette.text.primary,
      width: '6.5rem',
      height: '6.5rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        width: '5.5rem',
        height: '5.5rem',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
    sustainLine: {
      stroke: theme.palette.primary.main,
      strokeWidth: 1,
      height: '7rem',
      marginTop: '1rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        display: 'none',
      },
    },
  }),
  {
    classNamePrefix: 'section-1',
  }
);

const Section3: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  const svgPaths: SVGParams[] = [
    {
      id: '1_vertical',
      direction: PathDirection.VERTICAL,
      duration: 0.4,
      style: { height: '100%', width: PATH_SIZE },
    },
    {
      id: '2_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.4,
      style: { height: PATH_SIZE, width: '100%', bottom: 0 },
    },
    {
      id: '3_vertical',
      direction: PathDirection.VERTICAL,
      duration: 0.35,
      style: { height: '95%', width: PATH_SIZE, right: 0, bottom: 0 },
      reverseAnimation: true,
    },
    {
      id: '4_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.4,
      style: {
        height: PATH_SIZE,
        width: '42%',
        bottom: '95%',
        right: 0,
        zIndex: 0,
      },
      reverseAnimation: true,
    },
    {
      id: '5_diagonal',
      direction: PathDirection.LEFT_DOWN,
      duration: 0.25,
      style: { height: 50, right: '42%', bottom: 'calc(95% - 46px)' },
    },
  ];

  return (
    <section className={classes.info} ref={viewRef}>
      <div className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.sustain.title')}
        </Typography>
      </div>
      <WingedBorder right direction="down" length={50} />
      <Grid container>
        <RotatedGridText>{t('pages.homepage.sustain.rotated')}</RotatedGridText>
        <Grid item xs className={classes.infoContainer}>
          <div className={classes.svgContainer}>
            <SVGPaths show={inView} delay={1.5} paths={svgPaths} />
            <Grid container>
              <Grid item xs={12} md={6} className={classes.imageContainer}>
                <BottomReveal
                  delay={3.8}
                  show={inView}
                  className={classes.sustainIconContainer}
                >
                  <NetSVG className={classes.sustainIcons} />
                  <svg
                    viewBox="0 0 2 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.sustainLine}
                  >
                    <line x1="0" y1="0" x2="0" y2="100" />
                  </svg>
                </BottomReveal>
                <BottomReveal
                  delay={4.4}
                  show={inView}
                  className={classes.sustainIconContainer}
                >
                  <FactorySVG className={classes.sustainIcons} />
                  <svg
                    viewBox="0 0 2 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.sustainLine}
                  >
                    <line x1="0" y1="0" x2="0" y2="100" />
                  </svg>
                </BottomReveal>
                <BottomReveal
                  delay={5}
                  show={inView}
                  className={classes.sustainIconContainer}
                >
                  <JerseySVG className={classes.sustainIcons} />
                  <svg
                    viewBox="0 0 2 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.sustainLine}
                  >
                    <line x1="0" y1="0" x2="0" y2="100" />
                  </svg>
                </BottomReveal>
              </Grid>
              <Grid item xs={12} md={6} className={classes.infoTextContainer}>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.infoText}
                >
                  {t('pages.homepage.sustain.text.1')}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.infoText}
                >
                  {t('pages.homepage.sustain.text.2')}
                </Typography>
                <Typography variant="body1" className={classes.infoText}>
                  {t('pages.homepage.sustain.text.3')}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Section3;
