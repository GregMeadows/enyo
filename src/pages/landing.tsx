import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Socials from '../components/socials';
import Backdrop from '../images/backdrop.jpg';
import Logo from '../components/Logo';
import WingedBorder from '../components/WingedBorder';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      background: '#000',
    },
    grid: {
      height: '100%',
    },
    content: {
      padding: '2rem 20vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      backgroundImage: `url(${Backdrop})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
    about: {
      margin: '3rem 0',
      textAlign: 'center',
    },
    top: {
      width: '100%',
      paddingTop: '1rem',
    },
    bottom: {
      width: '100%',
      paddingBottom: '1rem',
    },
  }),
  {
    classNamePrefix: 'landing',
  }
);

const Landing: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className={classes.grid}
      >
        <Grid item className={classes.top}>
          <WingedBorder position="left" direction="down" />
        </Grid>
        <Grid item className={classes.content}>
          <Logo type="full" />
          <div className={classes.about}>
            <Typography variant="body1">{t('pages.landing.about')}</Typography>
          </div>
          <Socials />
        </Grid>
        <Grid item className={classes.bottom}>
          <WingedBorder position="right" direction="up" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Landing;
