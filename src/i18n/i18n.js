import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

const en = require('./i18n.en.json');
const cn = require('./i18n.cn.json');

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: { translations: en },
      cn: { translations: cn },
    },
    lng: 'en',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
