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
  team: string;
  website: string;
  password: string; // Honeypot
}

enum FormState {
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
      whiteSpace: 'pre-line',
    },
    form: {
      marginTop: '3rem',
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

  const storedValues: Partial<FormElements> = {
    name: sessionStorage.getItem('contact.name') || undefined,
    email: sessionStorage.getItem('contact.email') || undefined,
    message: sessionStorage.getItem('contact.message') || undefined,
    team: sessionStorage.getItem('contact.team') || undefined,
    website: sessionStorage.getItem('contact.website') || undefined,
  };

  const hasFilledForm =
    storedValues.name && storedValues.email && storedValues.message;

  const [values, setValues] = useState<FormElements>({
    name: '',
    email: '',
    message: '',
    team: '',
    website: '',
    password: '',
  });
  const [apiErrorText, setApiErrorText] = useState('');
  const [formState, setFormState] = useState<FormState>(
    hasFilledForm ? FormState.sent : FormState.default
  );
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasFilledForm) {
      setSending(true);

      if (values.password !== '') {
        // Honeypot capture
        setApiErrorText(t('pages.contact.form.honey'));
        setFormState(FormState.error);
        setSending(false);
      } else {
        fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
          .then(() => {
            sessionStorage.setItem('contact.name', values.name);
            sessionStorage.setItem('contact.email', values.email);
            sessionStorage.setItem('contact.message', values.message);
            sessionStorage.setItem('contact.team', values.team);
            sessionStorage.setItem('contact.website', values.website);
            setFormState(FormState.sent);
            setSending(false);
          })
          .catch((error) => {
            setApiErrorText(error.message);
            setFormState(FormState.error);
            setSending(false);
          });
      }
    }
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
      <form
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
              defaultValue={storedValues.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
              defaultValue={storedValues.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="team"
              label={t('pages.contact.labels.team')}
              variant="outlined"
              type="text"
              error={formState === FormState.error}
              onChange={(e) => handleChange(e)}
              disabled={disableControls}
              className={classes.width}
              defaultValue={storedValues.team}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="website"
              label={t('pages.contact.labels.website')}
              variant="outlined"
              type="text"
              error={formState === FormState.error}
              onChange={(e) => handleChange(e)}
              disabled={disableControls}
              className={classes.width}
              defaultValue={storedValues.website}
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
              defaultValue={storedValues.message}
            />
            <input
              type="text"
              name="password"
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
