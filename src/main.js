import Vue from 'vue'
import App from '@/App.vue'
import Vuex from 'vuex';
import axios from 'axios'
import store from '@/store/index'
import ES6Promise from 'es6-promise';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

ES6Promise.polyfill();
Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')