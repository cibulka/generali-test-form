export const LANG = {
  CS: 'cs',
  EN: 'en',
  SK: 'sk',
} as const;

export const LANGS = [LANG.CS, LANG.EN, LANG.SK] as const;

export type Lang = (typeof LANGS)[number];
