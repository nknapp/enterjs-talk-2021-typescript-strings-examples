// noinspection JSIgnoredPromiseFromCall

import i18next from "i18next";
import { en, de } from "src/03-react-i18next/04-translation-schema";
import {initReactI18next} from "react-i18next";

// This is the boilerplate code to setup react-i18next with translation tables
// Usually JSON files are used, but in this example, the tables written in
// TypeScript
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
});
