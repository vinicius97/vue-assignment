import "Styles/main.scss";
import Vue from "vue";
import router from "./pages/router";
import store from "./store";

new Vue({
  router,
  store,
  render: h => h("router-view")
}).$mount("#app");
