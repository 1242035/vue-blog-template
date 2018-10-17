
export const config = {
    __ENV__: process.env.NODE_ENV || window.__ENV__ || 'production',
    __LANG__: process.env.APP_LANG || window.__LANG__ || 'vi',
    __SENTRY_DNS__: process.env.SENTRY_DNS || window.__SENTRY_DNS__ || '',
    __API_SERVER_KEY__: process.env.API_SERVER_KEY || window.__API_SERVER_KEY__ || '',
    __API_SERVER_URL__: process.env.API_SERVER_URL || window.__API_SERVER_URL__ || '',
    __TOKEN_KEY__: process.env.TOKEN_KEY || window.__TOKEN_KEY__ || '__token__'
}