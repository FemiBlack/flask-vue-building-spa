import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueFormWizard);
/* eslint no-underscore-dangle: 0 */
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:9000/';
// crossDomain:true
// eslint-disable-next-line
axios.interceptors.response.use(undefined, (error) => {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch('logOut');
      return router.push('/login');
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
