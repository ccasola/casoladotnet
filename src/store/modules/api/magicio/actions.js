import * as types from "./mutation-types";
import MagicIOService from "@/services/magicioService";
import { withErrorHandler, messageErrorHandler } from "@/store/utilities/error";

const service = new MagicIOService();

const actions = {
  getEntriesByUser: withErrorHandler(
    async ({ commit }, userId) => {
      let response = await service.getEntriesByUser(userId);
      commit(types.UPDATE_DATA, response.data);
    },
    messageErrorHandler,
    "Failed to load Account Payable Entries by userId."
  )
};

export default actions;
