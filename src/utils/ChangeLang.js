const changeLanguage = (language, i18n) => {
  const currentLanguage = localStorage.getItem("language");
  if (currentLanguage) {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  } else {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }
};

export default changeLanguage;