import * as types from "./mutation-types";

const actions = {
  notify({ commit }, message) {
    commit(types.SET_VISIBLE, false);
    commit(types.SET_MESSAGE, message);
    commit(types.SET_VISIBLE, true);
  },
  dismiss({ commit }) {
    commit(types.SET_VISIBLE, false);
  }
};

export default actions;
