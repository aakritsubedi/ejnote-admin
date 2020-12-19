import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/user';
import admin from './modules/admin';
import notice from './modules/notice';
import studyMaterials from './modules/studyMaterials';



// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    users,
    admin,
    notice,
    studyMaterials
  }
});
