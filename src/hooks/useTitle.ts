import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setPageSubtitle, setPageTitle } from '../stores/settings';

export default function useTitle(title?: string, subtitle?: JSX.Element): void {
  const { t } = useTranslation();

  useEffect(() => {
    if (title) {
      document.title = `${t('company.name')} | ${title}`;
      setPageTitle(title);
      setPageSubtitle(subtitle || null);
    } else {
      document.title = t('company.name');
      setPageTitle(null);
      setPageSubtitle(null);
    }
  }, [subtitle, t, title]);
}
