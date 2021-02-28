import React, { FunctionComponent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
  Theme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { AnyObjectSchema } from 'yup';
import { FormikValues } from '../types';

export interface StepProps {
  stepLabel: string;
  content: JSX.Element;
  validationSchema?: AnyObjectSchema;
}

interface DialogStepperProps {
  steps: StepProps[];
  open: boolean;
  initialValues: FormikValues;
  onClose: () => void;
  onSubmit: (vales: FormikValues) => void;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    stepsContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
    },
    stepper: {
      paddingBottom: 0,
    },
  }),
  {
    classNamePrefix: 'dialog-stepper',
  }
);

const DialogStepper: FunctionComponent<DialogStepperProps> = ({
  steps,
  open,
  initialValues,
  onClose,
  onSubmit,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);
  const [snapshot, setSnapshot] = useState<FormikValues>(initialValues);

  useEffect(() => {
    // Reset stepper if reopening
    if (open) {
      setActiveStep(0);
      setSnapshot(initialValues);
    }
  }, [initialValues, open]);

  const step = steps[activeStep];
  const totalSteps = steps.length;
  const isLastStep = activeStep === totalSteps - 1;

  function handleNext(values: FormikValues) {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack(values: FormikValues) {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleSubmit(
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) {
    if (isLastStep) {
      onSubmit(values);
      onClose();
    } else {
      formikHelpers.setTouched({});
      formikHelpers.setSubmitting(false);
      handleNext(values);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      disableBackdropClick
    >
      <DialogTitle>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
        >
          {steps.map((singleStep) => (
            <Step key={singleStep.stepLabel}>
              <StepLabel>{t(singleStep.stepLabel)}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>
      <Formik<FormikValues>
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.validationSchema}
      >
        {(props: FormikProps<FormikValues>) => (
          <Form>
            <DialogContent className={classes.stepsContainer}>
              {step.content}
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>{t('button.cancel')}</Button>
              <Button
                disabled={activeStep === 0}
                onClick={() => handleBack(props.values)}
              >
                {t('button.back')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={props.isSubmitting}
              >
                {isLastStep ? t('button.create') : t('button.next')}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DialogStepper;
