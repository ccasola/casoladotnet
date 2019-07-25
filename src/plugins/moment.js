import Vue from "vue";
import moment from "moment";

const MomentPlugin = {
  install(Vue) {
    Vue.prototype.$moment = moment;
  }
};

Vue.use(MomentPlugin);
