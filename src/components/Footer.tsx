import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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

const Footer: FunctionComponent = () => {
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
        <Grid item className={classes.item} />
        <Grid item>
          <Typography variant="h6">{t('company.name')}</Typography>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        align="center"
        className={classes.copyright}
      >
        {t('copyright', { date: new Date().getFullYear() })}
      </Typography>
    </footer>
  );
};

export default Footer;
