import './assets/css/style.css';
import Vue from 'vue';
import { i18n } from './i18n';

import './parse';
import './log';
import VueQuill from 'vue-quill';
import Vuelidate from 'vuelidate';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueQuill);
Vue.use(Vuelidate);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
