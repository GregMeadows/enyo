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
    classNamePrefix: 'account',
  }
);

const Account: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.account.title'));

  return (
    <div>
      <Typography variant="body1" className={classes.title}>
        {t('pages.account.intro')}
      </Typography>
    </div>
  );
};
export default Account;
