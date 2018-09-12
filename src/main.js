import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketio from 'vue-socket.io';
import socketio  from 'socket.io-client';
import store from './store.js'
import { API_URL } from './config';


import App from './App.vue'

Vue.config.productionTip = false

Vue.use( BootstrapVue )
Vue.use( VueAxios, axios )

Vue.use(VueSocketio, socketio(API_URL), store);

new Vue({
  render: h => h(App)
}).$mount('#app')
