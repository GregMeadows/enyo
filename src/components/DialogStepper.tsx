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

type Values = Record<string, unknown>;

export interface StepProps {
  stepLabel: string;
  content: JSX.Element;
  validationSchema?: AnyObjectSchema;
}

interface DialogStepperProps {
  steps: StepProps[];
  open: boolean;
  onClose: () => void;
  onSubmit: (vales: Values) => void;
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
  onClose,
  onSubmit,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);
  const [snapshot, setSnapshot] = useState({});

  useEffect(() => {
    // Reset stepper if reopening
    if (open) {
      setActiveStep(0);
    }
  }, [open]);

  const step = steps[activeStep];
  const totalSteps = steps.length;
  const isLastStep = activeStep === totalSteps - 1;

  function handleNext(values: Values) {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack(values: Values) {
    setSnapshot(values);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleSubmit = async (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => {
    if (isLastStep) {
      onSubmit(values);
      onClose();
    }
    formikHelpers.setTouched({});
    handleNext(values);
  };

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
      <Formik<Values>
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.validationSchema}
      >
        {(props: FormikProps<Values>) => (
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
