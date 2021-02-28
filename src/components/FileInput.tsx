import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, IconButton, TextField, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from 'clsx';
import { FieldArray, useFormikContext } from 'formik';
import { formatBytes } from '../assets/Utils';
import { FileWithDescription, FormikValues } from '../types';

interface FileInputProps {
  acceptedTypes?: string[];
  name: string;
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
    itemClear: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: '0.4rem',
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
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
  } = useFormikContext<FormikValues>();
  const filesValue = values[name] as FileWithDescription[];

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { files },
    } = event;
    const newValue: FileWithDescription[] = [];
    if (files) {
      Array.from(files).forEach((file) => {
        newValue.push({
          file,
          description: '',
        });
      });
    }
    setFieldValue(name, newValue);
  }

  const error =
    touched[name] && typeof errors[name] === 'string' && Boolean(errors[name]);
  const helperText =
    touched[name] &&
    typeof errors[name] === 'string' &&
    t(errors[name] as string);

  let text;
  if (filesValue.length > 0) {
    text = t('forms.products.create.images.count', {
      count: filesValue.length,
    });
  } else {
    text = helperText || t('forms.products.create.images.none');
  }

  return (
    <div className={classes.root}>
      <div className={classes.upload}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={classes.label}>
          <input
            type="file"
            name={name}
            className={classes.input}
            multiple
            onChange={handleFileInputChange}
            accept={acceptedTypes?.join(',')}
          />
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            component="div"
            className={clsx(error && classes.errorButton)}
          >
            {t('forms.products.create.images.upload')}
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
      <FieldArray name={name}>
        {({ remove }) => (
          <div className={classes.fileElements}>
            {filesValue.length > 0 &&
              filesValue.map(({ file, description }, index) => {
                const itemName = `${name}.${index}.description`;

                const itemFileTouchedArray = (touched[
                  name
                ] as unknown) as FormikValues[];
                const itemFileTouched =
                  itemFileTouchedArray &&
                  (itemFileTouchedArray[index]?.file as boolean | undefined);
                const itemfileErrorArray = (errors[
                  name
                ] as unknown) as FormikValues[];
                const itemFileError =
                  itemfileErrorArray &&
                  (itemfileErrorArray[index]?.file as string | undefined);
                const itemFileErrorClass = clsx(
                  itemFileTouched && Boolean(itemFileError) && classes.errorText
                );
                const itemFileHelperText =
                  itemFileTouched && itemFileError && t(itemFileError);

                const itemDescriptionTouchedArray = (touched[
                  name
                ] as unknown) as FormikValues[];
                const itemDescriptionTouched =
                  itemDescriptionTouchedArray &&
                  (itemDescriptionTouchedArray[index]?.description as
                    | boolean
                    | undefined);
                const itemDescriptionErrorArray = (errors[
                  name
                ] as unknown) as FormikValues[];
                const itemDescriptionError =
                  itemDescriptionErrorArray &&
                  (itemDescriptionErrorArray[index]?.description as
                    | string
                    | undefined);

                return (
                  <div className={classes.item} key={file.name}>
                    <div className={classes.itemClear}>
                      <IconButton size="small" onClick={() => remove(index)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </div>
                    <div className={classes.itemText}>
                      <Typography
                        variant="h6"
                        noWrap
                        className={itemFileErrorClass}
                      >
                        {file.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        noWrap
                        className={itemFileErrorClass}
                      >
                        {itemFileHelperText || formatBytes(file.size)}
                      </Typography>
                    </div>
                    <div className={classes.itemInput}>
                      <TextField
                        label={t('forms.products.create.images.description')}
                        variant="outlined"
                        size="small"
                        multiline
                        rows={2}
                        fullWidth
                        onChange={handleChange}
                        name={itemName}
                        value={description}
                        error={
                          itemDescriptionTouched &&
                          Boolean(itemDescriptionError)
                        }
                        helperText={
                          itemDescriptionTouched &&
                          itemDescriptionError &&
                          t(itemDescriptionError)
                        }
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </FieldArray>
    </div>
  );
};
export default FileInput;
