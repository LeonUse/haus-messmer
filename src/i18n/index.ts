import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonDe from './locales/de/common.json';
import navigationDe from './locales/de/navigation.json';
import pensionDe from './locales/de/pension.json';
import praxisDe from './locales/de/praxis.json';
import formsDe from './locales/de/forms.json';
import seoDe from './locales/de/seo.json';
import contactDe from './locales/de/contact.json';
import legalDe from './locales/de/legal.json';

import commonEn from './locales/en/common.json';
import navigationEn from './locales/en/navigation.json';
import pensionEn from './locales/en/pension.json';
import praxisEn from './locales/en/praxis.json';
import formsEn from './locales/en/forms.json';
import seoEn from './locales/en/seo.json';
import contactEn from './locales/en/contact.json';
import legalEn from './locales/en/legal.json';

export const defaultNS = 'common';
export const resources = {
  de: {
    common: commonDe,
    navigation: navigationDe,
    pension: pensionDe,
    praxis: praxisDe,
    forms: formsDe,
    seo: seoDe,
    contact: contactDe,
    legal: legalDe,
  },
  en: {
    common: commonEn,
    navigation: navigationEn,
    pension: pensionEn,
    praxis: praxisEn,
    forms: formsEn,
    seo: seoEn,
    contact: contactEn,
    legal: legalEn,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // default language
    fallbackLng: 'en',
    ns: ['common', 'navigation', 'pension', 'praxis', 'forms', 'seo', 'contact', 'legal'],
    defaultNS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
