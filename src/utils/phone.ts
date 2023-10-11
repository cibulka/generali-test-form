import { LANG, Lang } from '../constants/i18n';

export function getPhoneLengthByLang(lang: Lang) {
  switch (lang) {
    case LANG.CS:
    case LANG.SK:
      return 9;
    case LANG.EN:
      return 10;
    default:
      throw new Error(`Unknown lang ${lang}`);
  }
}

export function getFormatByLang(lang: Lang) {
  switch (lang) {
    case LANG.CS:
      return '+(420) ### ### ###';
    case LANG.EN:
      return '+(1) ### ### ####';
    case LANG.SK:
      return '+(421) ### ### ###';
    default:
      return '';
  }
}

export function getPhoneCode(lang: Lang) {
  switch (lang) {
    case LANG.CS:
      return '+420';
    case LANG.EN:
      return '+1';
    case LANG.SK:
      return '+421';
    default:
      return '';
  }
}

export function appendPhoneCode(value: string, lang: Lang) {
  let result = value;
  const code = getPhoneCode(lang);
  if (!result.startsWith(code)) result = [code, value].join('');
  return result;
}
