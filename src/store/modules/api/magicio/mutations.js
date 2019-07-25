import * as types from "./mutation-types";
import { set } from "@/store/utilities";

const mutations = {
  [types.UPDATE_DATA](state, payload) {
    state.data = payload;
  },
  [types.SET_DATA_LOADING]: set("loading")
};

export default mutations;
