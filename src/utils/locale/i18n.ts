import i18n from "i18next";
import enTranslation from "./en.json";
import frTranslation from "./fr.json";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
