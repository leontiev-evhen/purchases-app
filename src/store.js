import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isConnected: false,
    purchases: []
  },
  mutations: {
    SOCKET_CONNECT(state) {
      state.isConnected = true;
    },
    SOCKET_DISCONNECT(state) {
      state.isConnected = false;
    },
    SOCKET_CREATE(state, payload) {
      
    },
    SOCKET_DELETE(state, payload) {
      
    },
    SOCKET_UPDATE(state, payload) {
      
    },
  }
})