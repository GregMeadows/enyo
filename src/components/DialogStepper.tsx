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

export interface StepProps {
  nameKey: string;
  Content: JSX.Element;
}

interface DialogStepperProps {
  steps: StepProps[];
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    stepsContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Reset stepper if reopening
    if (open) {
      setActiveStep(0);
    }
  }, [open]);

  const handleNext = () => {
    if (activeStep === Object.keys(steps).length - 1) {
      onClose();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          {steps.map((step: StepProps) => (
            <Step key={step.nameKey}>
              <StepLabel>{t(step.nameKey)}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>
      <DialogContent>
        <div className={classes.stepsContainer}>
          {steps[activeStep].Content}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('button.cancel')}</Button>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          {t('button.back')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === Object.keys(steps).length - 1
            ? t('button.create')
            : t('button.next')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogStepper;
