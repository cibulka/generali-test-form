'use client';
import i18next, { Namespace } from 'i18next';
import { initReactI18next, useTranslation as useTranslationLib } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { LANGS, Lang } from '../constants/i18n';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((loc: string, ns: string) => {
      return import(`../../i18n/${loc}/${ns}.json`);
    }),
  )
  .init({
    supportedLngs: LANGS,
    fallbackLng: LANGS[0],
    fallbackNS: 'common',
    defaultNS: 'common',
  });

i18next.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export function useTranslationClient(ns: Namespace, lang: Lang) {
  if (i18next.resolvedLanguage !== lang) i18next.changeLanguage(lang);
  return useTranslationLib(ns);
}
