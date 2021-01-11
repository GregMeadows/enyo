import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import enyoColor from '../images/enyo.color.png';
import WingedBorder from '../components/WingedBorder';
import Socials from '../components/Socials';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';

const useStyles = makeStyles(
  (theme: Theme) => ({
    about: {
      position: 'relative',
    },
    text: {
      margin: '4rem 40vw 2rem 5vw',
      marginBottom: '12rem',
      background: fade(theme.palette.background.default, 0.6),
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        margin: '3rem 4vw',
      },
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    imageContainer: {
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        textAlign: 'center',
      },
    },
    image: {
      position: 'absolute',
      zIndex: -1,
      bottom: 8,
      right: -120,
      width: '72rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        bottom: -10,
        right: -50,
        position: 'relative',
        width: '48rem',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        width: '36rem',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        width: '28rem',
      },
    },
    socials: {
      marginTop: '8rem',
      marginBottom: '4rem',
      textAlign: 'center',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 0',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '2rem 0',
      },
      '& :not(:last-child)': {
        marginRight: '4vw',
        [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
          marginRight: '6vw',
        },
      },
      '& > a > svg': {
        height: '5vw',
        maxHeight: '5rem',
        minHeight: '3rem',
        width: '5vw',
        maxWidth: '5rem',
        minWidth: '3rem',
      },
    },
  }),
  {
    classNamePrefix: 'about',
  }
);

const About: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className={classes.about}>
        <div className={classes.text}>
          <Typography variant="h1" className={classes.title}>
            {t('pages.about.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('pages.about.1')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('pages.about.2')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('pages.about.3')}
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={enyoColor}
            alt={t('company.name')}
            className={classes.image}
          />
        </div>
        <WingedBorder left direction="down" length={80} />
      </div>
      <div className={classes.socials}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.about.socials')}
        </Typography>
        <Socials className={classes.socialIcons} />
      </div>
    </div>
  );
};
export default About;
