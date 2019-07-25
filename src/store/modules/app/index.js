import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

const module = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export * from "./mutation-types";

export default module;
