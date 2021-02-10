import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(
  () => ({
    root: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    label: {
      cursor: 'pointer',
    },
    input: {
      display: 'none',
    },
    button: {},
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const FileInput: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={classes.label}>
        <input type="file" className={classes.input} />
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          component="div"
        >
          {t('pages.action.createproduct.images.upload')}
        </Button>
      </label>
    </div>
  );
};
export default FileInput;
