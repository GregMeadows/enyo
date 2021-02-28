import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { CreateProductForm } from './forms/products/create';
import CurrencyCharacter from './CurrencyCharacter';

const useStyles = makeStyles(
  (theme: Theme) => ({
    images: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '1rem',
    },
    imageContainer: {
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: theme.spacing(20),
    },
    image: {
      width: theme.spacing(18),
      height: theme.spacing(24),
      objectFit: 'contain',
    },
    imageInfo: {
      marginTop: '0.1rem',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      '& th, td': {
        textAlign: 'left',
        border: `1px solid ${theme.palette.border.main}`,
        padding: '0.4rem',
      },
    },
  }),
  {
    classNamePrefix: 'confirmation',
  }
);

const Confirmation: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { values } = useFormikContext<CreateProductForm>();

  const imagePreviews = values.files.map((image) => {
    const url = URL.createObjectURL(image.file);
    return (
      <div className={classes.imageContainer} key={image.file.name}>
        <img src={url} alt={image.description} className={classes.image} />
        <div className={classes.imageInfo}>
          <Typography variant="caption" noWrap>
            {image.file.name}
          </Typography>
        </div>
      </div>
    );
  });

  return (
    <div>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>
              <Typography variant="h6">
                {t('forms.products.create.details.name')}
              </Typography>
            </th>
            <td>
              <Typography variant="body2">{values.name}</Typography>
            </td>
          </tr>
          <tr>
            <th>
              <Typography variant="h6">
                {t('forms.products.create.details.price')}
              </Typography>
            </th>
            <td>
              <Typography variant="body1">
                <CurrencyCharacter />
                {values.price}
              </Typography>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <Typography variant="h6">
                {t('forms.products.create.details.description')}
              </Typography>
            </th>
          </tr>
          <tr>
            <td colSpan={2}>
              <Typography variant="body1">{values.description}</Typography>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={classes.images}>{imagePreviews}</div>
    </div>
  );
};
export default Confirmation;
