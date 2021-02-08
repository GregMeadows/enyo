import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const ProductDetails: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <TextField
        label={t('pages.action.createproduct.details.name')}
        variant="outlined"
      />
      <TextField
        label={t('pages.action.createproduct.details.description')}
        variant="outlined"
      />
      <TextField
        label={t('pages.action.createproduct.details.price')}
        variant="outlined"
        type="number"
      />
    </div>
  );
};
export default ProductDetails;
