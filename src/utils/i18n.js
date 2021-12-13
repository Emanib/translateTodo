import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getLanguage = () => {
  const lang = localStorage.getItem("language");
  if (!lang) {
    localStorage.setItem("language", "en");
    return "en";
  }
  return lang;
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: require("../lang.json"),
    lng: getLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;