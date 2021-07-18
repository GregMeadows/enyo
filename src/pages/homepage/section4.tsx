import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../../assets/consts';
import { ROUTE_CONTACT } from '../../assets/routes';
import Glitch from '../../components/onView/Glitch';
import SVGPaths, {
  PathDirection,
  SVGParams,
} from '../../components/onView/SVGPaths';
import RotatedGridText from '../../components/RotatedGridText';
import StyledButton from '../../components/StyledButton';
import WingedBorder from '../../components/WingedBorder';
import storeImg from '../../images/store.jpg';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '5rem 0',
      position: 'relative',
      background: theme.palette.background.paper,
      clipPath: `polygon(100% 0, 100% 94%, 95% 100%, 0 100%, 0 9%, 7% 0)`,
    },
    titleContainer: {
      margin: '1rem 4vw 0 0',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    title: {
      lineHeight: '60%',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: ' center',
      padding: '4rem 8vw 3rem 2vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '4rem 5vw 2rem 2vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '0 2.2rem',
      },
    },
    svgContainer: {
      position: 'relative',
    },
    infoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 3vw 3rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '6vw',
      },
    },
    infoText: {
      [theme.breakpoints.up(BREAKPOINT_LAPTOP)]: {
        fontSize: '1.3rem',
      },
    },
    contactButton: {
      textAlign: 'center',
      paddingTop: '2rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        paddingTop: '1rem',
      },
    },
    imageContainer: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '4rem',
      paddingLeft: '3rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        paddingTop: '3rem',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '2.2rem',
      },
    },
    imageWidth: {
      maxWidth: '40rem',
    },
  }),
  {
    classNamePrefix: 'section-4',
  }
);

const Section4: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  const svgPaths: SVGParams[] = [
    {
      id: '1_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.2,
      style: { height: PATH_SIZE, width: '30%' },
      reverseAnimation: true,
    },
    {
      id: '2_vertcal',
      direction: PathDirection.VERTICAL,
      duration: 0.26,
      style: { height: '100%', width: PATH_SIZE },
    },
    {
      id: '3_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.3,
      style: { height: PATH_SIZE, width: '95%', bottom: 0 },
    },
    {
      id: '4_diagonal',
      direction: PathDirection.LEFT_DOWN,
      duration: 0.2,
      style: { height: 50, left: '94.5%', bottom: 0 },
      reverseAnimation: true,
    },
  ];

  return (
    <section className={classes.info} ref={viewRef}>
      <Glitch show={inView} className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.store.title')}
        </Typography>
      </Glitch>
      <WingedBorder left direction="up" length={60} />
      <Grid container>
        <RotatedGridText
          show={inView}
          text={t('pages.homepage.store.rotated')}
        />
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <div className={classes.imageWidth}>
            <img src={storeImg} alt={t('pages.homepage.store.image')} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.infoContainer}>
          <div className={classes.svgContainer}>
            <SVGPaths show={inView} delay={1.5} paths={svgPaths} />
            <div className={classes.infoTextContainer}>
              <Typography
                variant="body1"
                paragraph
                className={classes.infoText}
              >
                {t('pages.homepage.store.text.1')}
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                {t('pages.homepage.store.text.2')}
              </Typography>
              <div className={classes.contactButton}>
                <StyledButton href={ROUTE_CONTACT}>
                  {t('pages.homepage.contact')}
                </StyledButton>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Section4;
