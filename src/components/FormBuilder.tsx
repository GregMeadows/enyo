/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import FileInput from './FileInput';

type Values = Record<string, unknown>;
export interface FormItem {
  type: 'text' | 'multiline' | 'file' | 'number';
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

  const { values, touched, errors } = useFormikContext<Values>();

  return (
    <div className={classes.root}>
      {items.map((item: FormItem) => {
        switch (item.type) {
          case 'file': {
            let files;
            // Sort of safely cast to FileList
            const castValue = values[item.name] as FileList;
            if (castValue.length > 0 && castValue[0].size) {
              files = castValue;
            }
            return (
              <FileInput
                key={item.labelKey}
                name={item.name}
                id={item.name}
                value={files}
                error={touched[item.name] && Boolean(errors[item.name])}
                helperText={touched[item.name] && errors[item.name]}
                {...item.props}
              />
            );
          }
          case 'multiline': {
            return (
              <TextField
                key={item.labelKey}
                label={t(item.labelKey)}
                variant="outlined"
                size="small"
                className={classes.text}
                multiline
                rows={4}
                name={item.name}
                id={item.name}
                value={values[item.name]}
                error={touched[item.name] && Boolean(errors[item.name])}
                helperText={touched[item.name] && errors[item.name]}
                {...item.props}
              />
            );
          }
          default:
          case 'text': {
            return (
              <TextField
                key={item.labelKey}
                label={t(item.labelKey)}
                variant="outlined"
                size="small"
                className={classes.text}
                name={item.name}
                id={item.name}
                value={values[item.name]}
                error={touched[item.name] && Boolean(errors[item.name])}
                helperText={touched[item.name] && errors[item.name]}
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
