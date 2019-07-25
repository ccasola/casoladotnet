import axios from "axios";

export default class BaseService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(config) {
    return await axios.get(this.baseUrl, config);
  }

  async getById(id, config) {
    let url = this.getBaseUrlWithId(id);
    let response = await axios.get(url, config);
    return response;
  }

  async delete(entity, config) {
    return await this.deleteById(entity.ID, config);
  }

  async deleteById(id, config) {
    let url = this.getBaseUrlWithId(id);
    let response = await axios.delete(url, config);
    return response;
  }

  async put(entity, config) {
    let url = this.getBaseUrlWithId(entity.ID);
    let response = await axios.put(url, entity, config);
    return response;
  }

  async post(entity, config) {
    let response = await axios.post(this.baseUrl, entity, config);
    return response;
  }

  async commit(config) {
    let response = await axios.post(`${this.baseUrl}/commit`, null, config);
    return response;
  }

  getBaseUrlWithId(id) {
    return `${this.baseUrl}/${id}`;
  }
}
