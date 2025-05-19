import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationSV from "./locales/sv/translation.json";

const resources = {
  en: { translation: translationEN },
  sv: { translation: translationSV }
};

// Konfigurerar i18next för att hantera flerspråkighet med automatisk språkdetektering och React-stöd.
i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    lng: "sv", 
    fallbackLng: "sv", 
    interpolation: {
      escapeValue: false 
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], 
      caches: ["localStorage", "cookie"] 
    }
  });

export default i18n;
