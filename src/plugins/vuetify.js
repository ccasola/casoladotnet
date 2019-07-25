import Vue from "vue";
import Vuetify from "vuetify";
import Theme from "../Themes/Default";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  ...Theme,
  options: {
    customProperties: true
  }
});
