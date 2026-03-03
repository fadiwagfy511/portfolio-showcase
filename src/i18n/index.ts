import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enServices from "./locales/en/services.json";
import enProjects from "./locales/en/projects.json";
import enContact from "./locales/en/contact.json";

import arCommon from "./locales/ar/common.json";
import arHome from "./locales/ar/home.json";
import arAbout from "./locales/ar/about.json";
import arServices from "./locales/ar/services.json";
import arProjects from "./locales/ar/projects.json";
import arContact from "./locales/ar/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        services: enServices,
        projects: enProjects,
        contact: enContact,
      },
      ar: {
        common: arCommon,
        home: arHome,
        about: arAbout,
        services: arServices,
        projects: arProjects,
        contact: arContact,
      },
    },
    defaultNS: "common",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
