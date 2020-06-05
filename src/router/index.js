import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Dashboard from '@/views/Dashboard';
import NotFound from '@/views/NotFound';

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "Login",
    title: "EJ Login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/",
    name: "dashboard",
    title: "EJ Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new Router({
  mode: "history",
  base: __dirname,
  routes
});

router.beforeEach((to, from, next) => {
  let isRequireAuth =  to.matched.some(record => record.meta.requiresAuth);
  
  let isAuthenticated = true;
  if (isRequireAuth && !isAuthenticated) next({ name: 'Login' })
  else next()
})


export default router;