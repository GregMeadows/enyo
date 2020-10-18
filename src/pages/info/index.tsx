import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import WingedBorder from '../../components/WingedBorder';
import Terms from './Terms';
import Privacy from './Privacy';
import Access from './Access';

interface InfoPage {
  title: string;
  content: JSX.Element;
}

interface InfoType {
  info: InfoPage;
}

interface InfoPages {
  [key: string]: InfoPage;
}

export const INFO_PAGES: InfoPages = {
  terms: {
    title: 'pages.info.terms.title',
    content: <Terms />,
  },
  privacy: {
    title: 'pages.info.privacy.title',
    content: <Privacy />,
  },
  access: {
    title: 'pages.info.access.title',
    content: <Access />,
  },
};

const useStyles = makeStyles(
  () => ({
    root: {
      paddingTop: '2rem',
    },
    title: {
      marginBottom: '2rem',
    },
    info: {
      padding: '2rem 12vw',
    },
  }),
  {
    classNamePrefix: 'info',
  }
);

const Info: FunctionComponent<InfoType> = ({ info }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <WingedBorder position="left" direction="down" />
      <section className={classes.info}>
        <Typography variant="h1" className={classes.title}>
          {t(info.title)}
        </Typography>
        {info.content}
      </section>
      <WingedBorder position="right" direction="up" />
    </div>
  );
};
export default Info;
