import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${view}`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: loadView("About"),
  },
  {
    path: "/services",
    name: "Services",
    component: loadView("Services"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
