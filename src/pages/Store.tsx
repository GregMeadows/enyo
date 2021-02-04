import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useTitle from '../hooks/useTitle';

const useStyles = makeStyles(
  () => ({
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  }),
  {
    classNamePrefix: 'store',
  }
);

const Store: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.store.title'));

  return (
    <div>
      <Typography variant="body1" className={classes.title}>
        {t('pages.store.intro')}
      </Typography>
    </div>
  );
};
export default Store;
