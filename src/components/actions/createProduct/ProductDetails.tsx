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
    field: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
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
        required
        size="small"
        className={classes.field}
      />
      <TextField
        label={t('pages.action.createproduct.details.price')}
        variant="outlined"
        type="number"
        required
        size="small"
        className={classes.field}
      />
      <TextField
        label={t('pages.action.createproduct.details.description')}
        variant="outlined"
        required
        size="small"
        className={classes.field}
        multiline
        rows={4}
      />
    </div>
  );
};
export default ProductDetails;
