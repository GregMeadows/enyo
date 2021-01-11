import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import enyoColor from '../images/enyo.color.png';
import WingedBorder from '../components/WingedBorder';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    text: {
      margin: '2rem 40vw 12rem 4vw',
      background: fade(theme.palette.background.default, 0.6),
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    imageContainer: {
      position: 'absolute',
      zIndex: -1,
      bottom: 3,
      right: -100,
      width: '60vw',
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
    <div className={classes.root}>
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
        <img src={enyoColor} alt={t('company.name')} />
      </div>
      <WingedBorder left direction="down" length={70} />
    </div>
  );
};
export default About;
