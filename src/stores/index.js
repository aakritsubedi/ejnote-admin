import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import admin from './modules/admin';


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    users,
    admin
  }
});
