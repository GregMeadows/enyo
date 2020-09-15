import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { isLightMode, switchThemeType } from '../stores/settings';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      height: 300,
      zIndex: -1,
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    grid: {
      height: 'calc(100% - 30px)',
    },
    item: {
      minWidth: 400,
      '&>*': {
        marginBottom: 10,
      },
    },
    copyright: {
      color: theme.palette.text.secondary,
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
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.grid}
      >
        <Grid item className={classes.item}>
          <Button onClick={switchThemeType}>
            {isLightMode() ? t('theme.dark') : t('theme.light')}
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h6">{t('company.name')}</Typography>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        align="center"
        className={classes.copyright}
      >
        {t('copyright', {
          year: new Date().getFullYear(),
          company: t('company.long'),
        })}
      </Typography>
    </footer>
  );
});

export default Footer;
