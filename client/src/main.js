import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueFormWizard from 'vue-form-wizard';
// import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import titleMixin from './mixins/titleMixin'
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import '@/assets/themify-icons.css';

import router from './router'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';

Vue.use(VueSweetalert2);
// Vue.use(Buefy)
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.mixin(titleMixin)
Vue.use(VueFormWizard);
/* eslint no-underscore-dangle: 0 */
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// crossDomain:true
// eslint-disable-next-line
axios.interceptors.response.use(undefined, (error) => {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch('logOut');
      return router.push('/');
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
