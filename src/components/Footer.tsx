import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { isLightMode, switchThemeType } from '../stores/settings';
import Logo from './Logo';
import LogoRepeat from '../images/logo/repeat.svg';

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
        ${fade(theme.palette.background.default, 0.8)}
      )`,
    },
    grid: {
      height: 'calc(100% - 30px)',
      paddingTop: 30,
    },
    item: {
      minWidth: 400,
      '&>*': {
        marginBottom: 10,
      },
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

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <div className={classes.overlay}>
        <Grid
          container
          alignItems="center"
          justify="space-around"
          className={classes.grid}
        >
          <Grid item className={classes.item}>
            <Button onClick={switchThemeType} size="small">
              {isLightMode() ? t('theme.dark') : t('theme.light')}
            </Button>
          </Grid>
          <Grid item>
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
              company: t('company.long'),
            })}
          </strong>
        </Typography>
      </div>
    </footer>
  );
});

export default Footer;
