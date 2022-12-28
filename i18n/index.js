/* eslint-disable @typescript-eslint/no-var-requires */
const en = require('./en.json');
const zh = require('./zh.json');

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang: 'zh',
  useBrowserDefault: true,
};

module.exports = i18n;
