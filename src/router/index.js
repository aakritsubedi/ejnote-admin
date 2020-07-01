import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Dashboard from '@/views/Dashboard';
import Users from '@/views/Users/Main';
import ViewUser from '@/views/Users/Show';
import StudyMaterial from '@/views/StudyMaterial/Main';
import ViewStudyMaterial from '@/views/StudyMaterial/Show';
import Visitor from '@/views/Visitor/Main';
import NotFound from '@/views/NotFound';

Vue.use(Router);

const routes = [
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/admin",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/users",
    name: "users",
    component: Users  ,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/users/view/:id",
    name: "viewUser",
    component: ViewUser,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/study-materials",
    name: "studyMaterial",
    component: StudyMaterial,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/study-materials/view/:id",
    name: "viewStudyMaterial",
    component: ViewStudyMaterial,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/visitors",
    name: "visitors",
    component: Visitor,
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