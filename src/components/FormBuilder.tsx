/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import FileInput from './FileInput';
import { FormikValues } from '../types';

export interface FormItem {
  type: 'text' | 'multiline' | 'files' | 'number';
  name: string;
  labelKey: string;
  props?: Record<string, unknown>;
}

interface FormBuilderProps {
  items: FormItem[];
}

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    text: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
  }),
  {
    classNamePrefix: 'product-details',
  }
);

const FormBuilder: FunctionComponent<FormBuilderProps> = ({ items }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    values,
    touched,
    errors,
    handleChange,
  } = useFormikContext<FormikValues>();

  return (
    <div className={classes.root}>
      {items.map((item: FormItem) => {
        const isMultiline = item.type === 'multiline';
        const isNumber = item.type === 'number';

        switch (item.type) {
          case 'files': {
            return (
              <FileInput key={item.labelKey} name={item.name} {...item.props} />
            );
          }
          default:
          case 'number':
          case 'multiline':
          case 'text': {
            return (
              <TextField
                key={item.labelKey}
                label={t(item.labelKey)}
                variant="outlined"
                size="small"
                className={classes.text}
                onChange={handleChange}
                type={isNumber ? 'number' : undefined}
                multiline={isMultiline}
                rows={isMultiline ? 4 : undefined}
                InputProps={
                  isNumber
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            {t('currency.gbp')}
                          </InputAdornment>
                        ),
                      }
                    : undefined
                }
                name={item.name}
                value={values[item.name] || ''}
                error={touched[item.name] && Boolean(errors[item.name])}
                helperText={
                  touched[item.name] && t(errors[item.name] as string)
                }
                {...item.props}
              />
            );
          }
        }
      })}
    </div>
  );
};
export default FormBuilder;
