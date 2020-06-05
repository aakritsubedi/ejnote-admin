import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, vm, info);

  router.push("/error");
};
Vue.config.warnHandler = function(msg, vm, info) {
  console.log(msg, vm, info);
};

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
