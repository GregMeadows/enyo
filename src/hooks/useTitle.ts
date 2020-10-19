import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useTitle(title?: string): void {
  const { t } = useTranslation();

  useEffect(() => {
    if (title) {
      document.title = `${t('company.name')} | ${title}`;
    } else {
      document.title = t('company.name');
    }
  }, [t, title]);
}
