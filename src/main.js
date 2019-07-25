import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

// Plugins
import "@/plugins/vuetify";
import "@/plugins/moment";
import AxiosPlugin from "@/plugins/axios";

Vue.use(AxiosPlugin, Vue.prototype.$menuparameters);

import AppBarNavigation from "@/layout/AppBarNavigation";

Vue.component("AppBarNavigation", AppBarNavigation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
