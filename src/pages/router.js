import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Pages
import App from "./App.vue";
import { routes as companyRoutes } from "./Company";

const routes = [
  {
    path: "/",
    component: App,
    children: [...companyRoutes]
  }
];

const router = new VueRouter({
  routes
});

export default router;
