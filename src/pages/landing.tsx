import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Socials from '../components/socials';
import Backdrop from '../images/backdrop.svg';
import Logo from '../components/Logo';
import Distort from '../components/DistortText';
import GlitchText from '../components/GlitchText';
import WingedBorder from '../components/WingedBorder';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';

const BACKDROP_CLIP = '4vw';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: '100%',
      width: '100%',
      background: 'radial-gradient(#222, #000);',
      overflow: 'auto',
    },
    grid: {
      height: '100%',
    },
    content: {
      padding: '0 18vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '0 12vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '0 8vw',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '0 4vw',
      },
    },
    backdrop: {
      position: 'relative',
      clipPath: `
        polygon(${BACKDROP_CLIP} 0%, 100% 0,
        100% calc(100% - ${BACKDROP_CLIP}),
        calc(100% - ${BACKDROP_CLIP}) 100%,
        0 100%, 0 ${BACKDROP_CLIP})
      `,
      background: theme.palette.background.default,
      backgroundImage: `url(${Backdrop})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 120%',
      backgroundPosition: 'center',
      maxWidth: 1300,
    },
    contentWingTop: {
      paddingLeft: BACKDROP_CLIP,
      paddingTop: 18,
    },
    contentWingBottom: {
      paddingRight: BACKDROP_CLIP,
      paddingBottom: 18,
    },
    innerContent: {
      padding: '5vh 6vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    about: {
      margin: '4rem 0',
      textAlign: 'center',
    },
    top: {
      width: '100%',
      paddingTop: '3vh',
      paddingBottom: '2vh',
    },
    bottom: {
      width: '100%',
      paddingTop: '2vh',
      paddingBottom: '3vh',
    },
    loading: {
      textTransform: 'uppercase',
      fontFamily: ['"Cairo"', '"Roboto"'].join(','),
      letterSpacing: '0.2rem',
      textAlign: 'right',
      margin: '0 calc(2% + 2rem) -1rem 0',
    },
  }),
  {
    classNamePrefix: 'landing',
  }
);

const Landing: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const company = `${t('company.long')}. ${t('company.info')}`;

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className={classes.grid}
        wrap="nowrap"
      >
        <Grid item className={classes.top}>
          <WingedBorder position="left" direction="down" />
        </Grid>
        <Grid item className={classes.content}>
          <div className={classes.backdrop}>
            <WingedBorder
              position="left"
              direction="down"
              className={classes.contentWingTop}
            />
            <div className={classes.innerContent}>
              <Distort>
                <Logo type="full" />
              </Distort>
              <div className={classes.about}>
                <GlitchText
                  text={t('pages.landing.styles.glitch')}
                  variant="h1"
                />
              </div>
              <Socials />
            </div>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('copyright', {
                year: new Date().getFullYear(),
                company,
              })}
            </Typography>
            <WingedBorder
              position="right"
              direction="up"
              className={classes.contentWingBottom}
            />
          </div>
        </Grid>
        <Grid item className={classes.bottom}>
          <Typography variant="h6" className={classes.loading}>
            {t('pages.landing.coming')}
          </Typography>
          <WingedBorder position="right" direction="up" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Landing;
