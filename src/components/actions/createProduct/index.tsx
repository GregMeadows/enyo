import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useTitle from '../../../hooks/useTitle';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import { KeyElement } from '../../../types';

const useStyles = makeStyles(
  (theme: Theme) => ({
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
  {
    classNamePrefix: 'add-product',
  }
);

const CreateProduct: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.action.createproduct.title'));

  const [activeStep, setActiveStep] = React.useState(0);

  const steps: KeyElement = {
    // t('pages.action.createproduct.details.title')
    'pages.action.createproduct.details.title': <ProductDetails />,
    // t('pages.action.createproduct.images.title')
    'pages.action.createproduct.images.title': <ProductImages />,
  };

  // upload the image to S3 and then save it in the GraphQL API
  // async function createProduct() {
  //   if (file) {
  //     const extension = file.name.split(".")[1]
  //     const { type: mimeType } = file
  //     const key = `images/${uuid()}${productName}.${extension}`
  //     const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
  //     const inputData = { name: productName , image: url }

  //     try {
  //       await Storage.put(key, file, {
  //         contentType: mimeType
  //       })
  //       await API.graphql(graphqlOperation(CreateProduct, { input: inputData }))
  //     } catch (err) {
  //       console.log('error: ', err)
  //     }
  //   }
  // }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {Object.keys(steps).map((label) => (
        <Step key={label}>
          <StepLabel>{t(label)}</StepLabel>
          <StepContent>
            {steps[label]}
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  {t('button.back')}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === Object.keys(steps).length - 1
                    ? t('button.finish')
                    : t('button.next')}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default CreateProduct;
