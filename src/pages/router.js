import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Pages
import App from './App.vue'
import CompanyData from './Company/CompanyData.vue'

const routes = [
  {
    path: '/',
    component: CompanyData
  },
  {
    path: '*',
    component: App
  }
];

const router = new VueRouter({
  routes
});

export default router;