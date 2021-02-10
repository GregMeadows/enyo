import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FileInput from './FileInput';

export interface FormItem {
  type: 'text' | 'multiline' | 'file';
  required?: boolean;
  labelKey: string;
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

  return (
    <div className={classes.root}>
      {items.map((item: FormItem) => {
        switch (item.type) {
          case 'file': {
            return <FileInput key={item.labelKey} />;
          }
          case 'multiline': {
            return (
              <TextField
                key={item.labelKey}
                label={t(item.labelKey)}
                variant="outlined"
                required={item.required}
                size="small"
                className={classes.text}
                multiline
                rows={4}
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
                required={item.required}
                size="small"
                className={classes.text}
              />
            );
          }
        }
      })}
    </div>
  );
};
export default FormBuilder;
