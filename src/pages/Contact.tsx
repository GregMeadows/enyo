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
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useTitle from '../hooks/useTitle';
import Main from '../components/Main';

const API_URL =
  'https://dl20cbg609.execute-api.eu-west-1.amazonaws.com/prod/contact';

interface FormElements {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot
}

export enum FormState {
  default,
  sent,
  error,
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
      marginBottom: '2rem',
    },
    progress: {
      marginLeft: '3rem',
      marginRight: '3rem',
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

  let mainText;
  if (formState === FormState.sent) {
    mainText = (
      <Typography variant="body1">{t('pages.contact.form.sent')}</Typography>
    );
  } else if (formState === FormState.error) {
    mainText = (
      <>
        <Typography variant="body1">{t('pages.contact.form.error')}</Typography>
        <Typography variant="body1" paragraph>
          <strong>{apiErrorText}</strong>
        </Typography>
        <Typography variant="body1">{t('pages.contact.form.retry')}</Typography>
      </>
    );
  } else {
    mainText = (
      <Typography variant="body1">{t('pages.contact.form.default')}</Typography>
    );
  }

  return (
    <Main>
      <div className={classes.text}>{mainText}</div>
      {formState !== FormState.sent && (
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
                disabled={sending}
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
      )}
    </Main>
  );
};
export default Contact;
