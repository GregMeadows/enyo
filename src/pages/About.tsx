import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Main from '../components/Main';

const useStyles = makeStyles(
  () => ({
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
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
    <Main>
      <Typography variant="h1" className={classes.title}>
        {t('pages.about.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.about.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.about.2')}
      </Typography>
    </Main>
  );
};
export default About;
