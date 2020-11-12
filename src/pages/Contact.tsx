import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CircularProgress,
  Collapse,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import SendIcon from '@material-ui/icons/Send';
import useTitle from '../hooks/useTitle';
import Main from '../components/Main';

const API_URL = 'https://api.enyo.gg/contact';

interface FormElements {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot
}

export enum FormState {
  default = 'info',
  sent = 'success',
  error = 'error',
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    honeypot: {
      display: 'none !important',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    width: {
      width: '100%',
    },
    submit: {
      textAlign: 'right',
    },
    text: {
      marginTop: '1rem',
      marginBottom: '2rem',
    },
    progress: {
      marginLeft: '3rem',
      marginRight: '4rem',
    },
  }),
  {
    classNamePrefix: 'info',
  }
);

const Contact: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.contact.title'));

  const hasFilledForm = sessionStorage.getItem('contacted') === 'true';

  const [values, setValues] = useState<FormElements>({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [apiErrorText, setApiErrorText] = useState('');
  const [formState, setFormState] = useState<FormState>(
    hasFilledForm ? FormState.sent : FormState.default
  );
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(() => {
        sessionStorage.setItem('contacted', 'true');
        setFormState(FormState.sent);
        setSending(false);
      })
      .catch((error) => {
        setApiErrorText(error.message);
        setFormState(FormState.error);
        setSending(false);
      });
  }

  function handleChange(
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  let alertText;
  if (formState === FormState.sent) {
    alertText = (
      <>
        <AlertTitle>{t('pages.contact.form.sent')}</AlertTitle>
        <div>{t('pages.contact.form.thanks')}</div>
      </>
    );
  } else if (formState === FormState.error) {
    alertText = (
      <>
        <AlertTitle>{t('pages.contact.form.error')}</AlertTitle>
        <div>
          {t('pages.contact.form.reason')} <strong>{apiErrorText}</strong>
        </div>
      </>
    );
  }

  const disableControls = formState === FormState.sent;

  return (
    <Main>
      <Collapse in={formState !== FormState.default}>
        <Alert severity={formState}>{alertText}</Alert>
      </Collapse>
      <div className={classes.text}>
        <Typography variant="body1">
          {t('pages.contact.form.default')}
        </Typography>
      </div>
      <form name="contact" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <TextField
              name="name"
              label={t('pages.contact.labels.name')}
              variant="outlined"
              type="text"
              error={formState === FormState.error}
              onChange={(e) => handleChange(e)}
              required
              disabled={disableControls}
              className={classes.width}
            />
          </Grid>
          <Grid item xs={12} sm>
            <TextField
              name="email"
              label={t('pages.contact.labels.email')}
              variant="outlined"
              type="email"
              error={formState === FormState.error}
              onChange={(e) => handleChange(e)}
              required
              disabled={disableControls}
              className={classes.width}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label={t('pages.contact.labels.message')}
              variant="outlined"
              multiline
              rows="10"
              error={formState === FormState.error}
              onChange={(e) => handleChange(e)}
              inputProps={{
                minLength: 20,
              }}
              required
              disabled={disableControls}
              className={classes.width}
            />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              className={classes.honeypot}
            />
          </Grid>
          <Grid item xs={12} className={classes.submit}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={sending || disableControls}
            >
              {(sending && (
                <CircularProgress
                  color="secondary"
                  size="1.5rem"
                  className={classes.progress}
                />
              )) || (
                <>
                  <SendIcon className={classes.icon} />
                  {t('pages.contact.send')}
                </>
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Main>
  );
};
export default Contact;
