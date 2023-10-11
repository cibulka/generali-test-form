import { LANG, Lang } from '../constants/i18n';

import { useTranslationClient } from './useTranslate';

export function useLangOptions(lang: Lang) {
  const { t } = useTranslationClient('common', lang);

  return [
    {
      value: LANG.CS,
      label: t('langs.cs'),
    },
    {
      value: LANG.EN,
      label: t('langs.en'),
    },
    {
      value: LANG.SK,
      label: t('langs.sk'),
    },
  ];
}
