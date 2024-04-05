function getLocaleDate(){
  const date = new Date();
  const locale = navigator.language;
  const localeDate = date.toLocaleDateString(locale);
  return localeDate;
}

const dataLocalizada = getLocaleDate();
alert(dataLocalizada);