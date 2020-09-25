import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import Logo from './Logo';
import LogoRepeat from '../images/logo/repeat.svg';
import NavList, { LinkedItem } from './NavList';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: `url(${LogoRepeat})`,
      backgroundRepeat: 'space',
      backgroundSize: '130px 30px',
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
      height: 'calc(100% - 30px)',
      padding: '30px 12VW 0',
    },
    gridLogo: {
      textAlign: 'right',
    },
    copyright: {
      userSelect: 'none',
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
    { text: t('nav.about.terms'), link: '/' },
    { text: t('nav.about.privacy'), link: '/' },
    { text: t('nav.about.access'), link: '/' },
  ];

  const itemsSocial: LinkedItem[] = [
    { text: t('nav.social.twitter'), link: '/' },
    { text: t('nav.social.insta'), link: '/' },
    { text: t('nav.social.twitch'), link: '/' },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <div className={classes.overlay}>
        <Grid container className={classes.grid}>
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
          <Grid item xs className={classes.gridLogo}>
            <Logo type="text" />
          </Grid>
        </Grid>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.copyright}
        >
          <strong>
            {t('copyright', {
              year: new Date().getFullYear(),
              company,
            })}
          </strong>
        </Typography>
      </div>
    </footer>
  );
});

export default Footer;
