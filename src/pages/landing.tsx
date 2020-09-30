import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Backdrop from '../images/backdrop.jpg';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      background: `url(${Backdrop})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
    },
    top: {
      position: 'fixed',
      top: '1rem',
      textTransform: 'uppercase',
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
      <div className={classes.top}>
        <Typography variant="h1">{t('pages.landing.coming')}</Typography>
      </div>
    </div>
  );
};
export default Landing;
