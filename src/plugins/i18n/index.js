const { createI18n } = require('vue-i18n');
const zh_CHS = require('./languages/zh-CHS.json');
const zh_CHT = require('./languages/zh-CHT.json');
const en_US = require('./languages/en-US.json');

const i18n = createI18n({
    legacy: false,
    locale: 'zh-CHT',
    fallbackLocale: 'zh-CHT',
    globalInjection: true,
    messages: {
        'zh-CHS': zh_CHS,
        'zh-CHT': zh_CHT,
        'en-US': en_US
    }
});

module.exports = i18n;
