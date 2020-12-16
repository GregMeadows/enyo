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
import enyoHoodyPurple from '../../images/clothing/enyo/merch/hood.purple.png';
import SVGPaths, {
  SVGParams,
  PathDirection,
} from '../../components/onView/SVGPaths';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '5rem 0',
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
      textAlign: 'right',
      margin: '1rem 4vw 0 0',
    },
    title: {
      lineHeight: '60%',
    },
    infoContainer: {
      padding: '4rem 24vw 4rem 10vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '4rem 10vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '3rem 8vw',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '2rem 6vw',
      },
    },
    svgContainer: {
      position: 'relative',
    },
    infoContainerInner: {
      padding: '4rem 6vw 3rem 3vw',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '6vw',
      },
    },
    infoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        order: 1,
        paddingTop: '2rem',
      },
    },
    infoText: {
      [theme.breakpoints.up(BREAKPOINT_LAPTOP)]: {
        fontSize: '1.3rem',
      },
    },
    imageContainer: {
      textAlign: 'right',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        textAlign: 'center',
      },
    },
  }),
  {
    classNamePrefix: 'section-1',
  }
);

const Section2: FunctionComponent = () => {
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
      style: { height: '70%', width: PATH_SIZE, right: 0, bottom: 0 },
      reverseAnimation: true,
    },
    {
      id: '4_diagonal',
      direction: PathDirection.RIGHT_DOWN,
      duration: 0.25,
      style: { height: 50, right: 0, bottom: 'calc(70% - 3px)' },
      reverseAnimation: true,
    },
    {
      id: '5_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.4,
      style: {
        height: PATH_SIZE,
        width: '42%',
        bottom: 'calc(70% + 44px)',
        right: 38,
        zIndex: -1,
      },
      reverseAnimation: true,
    },
  ];

  return (
    <section className={classes.info} ref={viewRef}>
      <div className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.merch.title')}
        </Typography>
      </div>
      <WingedBorder left direction="up" length={80} />
      <Grid container>
        <Grid item className={classes.rotatedContainer}>
          <div className={classes.rotated}>
            <Typography variant="subtitle1">
              {t('pages.homepage.merch.rotated')}
            </Typography>
          </div>
        </Grid>
        <Grid item xs className={classes.infoContainer}>
          <div className={classes.svgContainer}>
            <SVGPaths show={inView} delay={1.5} paths={svgPaths} />
            <Grid container className={classes.infoContainerInner}>
              <Grid item xs={12} md={6} className={classes.infoTextContainer}>
                <Typography variant="body1" className={classes.infoText}>
                  {t('pages.homepage.merch.text.1')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={classes.imageContainer}>
                <img
                  src={enyoHoodyPurple}
                  alt={t('pages.homepage.kit.front')}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Section2;
