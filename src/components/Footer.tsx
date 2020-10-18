import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import Logo from './Logo';
import LogoRepeat from '../images/logo/repeat.png';
import NavList from './NavList';
import { LinkedItem } from '../types';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: `url(${LogoRepeat})`,
      backgroundRepeat: 'space',
      backgroundSize: '132px 97px',
      height: 300,
      zIndex: -1,
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    overlay: {
      height: '100%',
      width: '100%',
      background: `linear-gradient(
        ${theme.palette.background.default},
        ${fade(theme.palette.background.default, 0.85)}
      )`,
    },
    grid: {
      height: '100%',
      padding: '0.5rem 12vw',
    },
    gridLogo: {
      textAlign: 'right',
    },
  }),
  {
    classNamePrefix: 'footer',
  }
);

const Footer: FunctionComponent = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const company = t('company.long');

  const itemsHelp: LinkedItem[] = [
    { text: t('nav.help.help'), link: '/' },
    { text: t('nav.help.faqs'), link: '/' },
    { text: t('nav.help.delivery'), link: '/' },
    { text: t('nav.help.contact'), link: '/' },
  ];

  const itemsAbout: LinkedItem[] = [
    { text: t('nav.about.about'), link: '/' },
    { text: t('nav.about.terms'), link: '/terms' },
    { text: t('nav.about.privacy'), link: '/privacy' },
    { text: t('nav.about.access'), link: '/access' },
  ];

  const itemsSocial: LinkedItem[] = [
    { text: t('nav.social.twitter'), link: '/' },
    { text: t('nav.social.insta'), link: '/' },
    { text: t('nav.social.twitch'), link: '/' },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <div className={classes.overlay}>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.grid}
        >
          <Grid container justify="space-between">
            <Grid container justify="space-between" item xs={7}>
              <Grid item xs={3}>
                <NavList title={t('nav.help.title')} items={itemsHelp} />
              </Grid>
              <Grid item xs={3}>
                <NavList title={t('nav.about.title')} items={itemsAbout} />
              </Grid>
              <Grid item xs={3}>
                <NavList title={t('nav.social.title')} items={itemsSocial} />
              </Grid>
            </Grid>
            <Grid item className={classes.gridLogo}>
              <Logo type="text" />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item>
              <Typography variant="subtitle2">
                <strong>
                  {t('copyright', {
                    year: new Date().getFullYear(),
                    company,
                  })}
                </strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                <strong>{t('company.info')}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
});

export default Footer;
