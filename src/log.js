
import * as Sentry from '@sentry/browser';
import Vue from 'vue';
import { config } from './config';
if( process.env.NODE_ENV == 'production') {
Sentry.init({
    dsn: config.__SENTRY_DNS__,
    integrations: [new Sentry.Integrations.Vue({ Vue })]
});
}