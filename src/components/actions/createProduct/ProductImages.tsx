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
    file: {},
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const ProductImages: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <input type="file" className={classes.file} />
      <TextField
        label={t('pages.action.createproduct.images.description')}
        variant="outlined"
      />
    </div>
  );
};
export default ProductImages;
