import React, { FunctionComponent, ReactNode, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { formatBytes } from '../assets/Utils';

interface FileInputProps {
  acceptedTypes?: string[];
  name?: string;
  id?: string;
  value?: FileList | null;
  error?: boolean;
  helperText?: ReactNode;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
    },
    upload: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      marginRight: '1rem',
    },
    input: {
      display: 'none',
    },
    fileElements: {
      marginTop: '1rem',
    },
    item: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      display: 'flex',
    },
    itemText: {
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: '0.5rem',
    },
    itemInput: {
      flexGrow: 1,
    },
    errorButton: {
      border: `1px solid ${theme.palette.error.main}`,
    },
    errorText: {
      color: theme.palette.error.main,
    },
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const FileInput: FunctionComponent<FileInputProps> = ({
  acceptedTypes,
  name,
  id,
  value,
  error,
  helperText,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(
    value || null
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { files },
    } = event;
    setSelectedFiles(files && files.length > 0 ? files : null);
  }

  let fileElements;
  if (selectedFiles) {
    fileElements = Array.from(selectedFiles).map((file) => (
      <div className={classes.item} key={file.name}>
        <div className={classes.itemText}>
          <Typography variant="h6" noWrap>
            {file.name}
          </Typography>
          <Typography variant="subtitle2" noWrap>
            {formatBytes(file.size)}
          </Typography>
        </div>
        <div className={classes.itemInput}>
          <TextField
            label={t('pages.action.createproduct.images.description')}
            variant="outlined"
            required
            size="small"
            multiline
            rows={2}
            fullWidth
          />
        </div>
      </div>
    ));
  }

  let text;
  if (selectedFiles && selectedFiles.length > 0) {
    text = t('pages.action.createproduct.images.count', {
      count: selectedFiles?.length,
    });
  } else {
    text = helperText || t('pages.action.createproduct.images.none');
  }

  return (
    <div className={classes.root}>
      <div className={classes.upload}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={classes.label}>
          <input
            type="file"
            name={name}
            id={id}
            className={classes.input}
            multiple
            onChange={handleChange}
            accept={acceptedTypes?.join(',')}
          />
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            component="div"
            className={clsx(error && classes.errorButton)}
          >
            {t('pages.action.createproduct.images.upload')}
          </Button>
        </label>
        <Typography
          variant="h6"
          noWrap
          className={clsx(error && classes.errorText)}
        >
          {text}
        </Typography>
      </div>
      <div className={classes.fileElements}>{fileElements}</div>
    </div>
  );
};
export default FileInput;
