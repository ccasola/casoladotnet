import * as types from "./mutation-types";
import { set } from "@/store/utilities";

const mutations = {
  [types.SET_MESSAGE]: set("message"),
  [types.SET_VISIBLE]: set("visible")
};

export default mutations;
