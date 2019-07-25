import BaseService from "./baseService";

export default class CardService extends BaseService {
  constructor() {
    let baseUrl = "/api/cards";
    super(baseUrl);
  }

  async getByAuthToken(authToken) {
    let response = await super.getById(authToken);
    return response;
  }
}
