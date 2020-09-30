import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Backdrop from '../images/backdrop.jpg';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      background: `#222 url(${Backdrop})`,
      backgroundPosition: 'center -12vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      paddingTop: '72vh',
    },
    about: {
      padding: '2rem 20vw',
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
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <div className={classes.about}>
            <Typography variant="body1">{t('dev:loremIpsum.1')}</Typography>
          </div>
        </Grid>
        <Grid item>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};
export default Landing;
