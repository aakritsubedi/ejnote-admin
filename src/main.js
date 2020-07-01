import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, vm, info);

  router.push({ name: 'error' });
};
Vue.config.warnHandler = function(msg, vm, info) {
  console.log(msg, vm, info);
};

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
