
export function capitalizeFirstLetter(s: string, locale = navigator.language) {
  return s.charAt(0).toLocaleUpperCase(locale) + s.slice(1);
}