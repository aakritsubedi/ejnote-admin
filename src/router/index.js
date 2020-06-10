import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Dashboard from '@/views/Dashboard';
import Users from '@/views/Users/Main';
import ViewUser from '@/views/Users/Show';
import NotFound from '@/views/NotFound';

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/users",
    name: "users",
    component: Users  ,
    meta: { requiresAuth: true }
  },
  {
    path: "/users/view/:id",
    name: "users",
    component: ViewUser,
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