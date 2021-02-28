import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      marginRight: '0.2rem',
      color: theme.palette.primary.main,
    },
  }),
  {
    classNamePrefix: 'confirmation',
  }
);

const CurrencyCharacter: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return <span className={classes.root}>{t('currency.gbp')}</span>;
};
export default CurrencyCharacter;
