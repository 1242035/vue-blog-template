import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { config } from './config';
import messages from './lang';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: config.__LANG__, // set locale
    messages, // set locale messages
});