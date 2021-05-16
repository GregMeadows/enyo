import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useTitle from '../../hooks/useTitle';
import terms from './terms';
import faq from './faq/index';
import privacy from './privacy';
import shipping from './shipping';
import returns from './returns';
import { InfoPage } from './types';
import Main from '../../components/Main';
import Markdown from '../../components/Markdown';
import settings from '../../stores/settings';

const infoPages: { [key: string]: InfoPage } = {
  terms,
  faq,
  privacy,
  shipping,
  returns,
};

const Info: FunctionComponent = () => {
  const { language } = useContext(settings);
  const { t } = useTranslation();
  const location = useLocation();
  const page = infoPages[location.pathname.substring(1)];
  const title = page ? t(page.title) : undefined;
  const subtitle = page ? (
    <>
      <strong>{t('pages.info.updated')}</strong>{' '}
      {page.updated.toLocaleDateString()}
    </>
  ) : undefined;
  useTitle(title, subtitle);

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    if (page) {
      fetch(page.translations[language] || page.translations.en)
        .then((res) => res.text())
        .then((md) => {
          setMarkdown(md);
        });
    }
  }, [language, page]);

  if (!page) {
    return (
      <Main>
        <Typography variant="body1" paragraph>
          {t('pages.info.error')}
        </Typography>
      </Main>
    );
  }

  return (
    <Main>
      <Markdown>{markdown}</Markdown>
    </Main>
  );
};
export default Info;
