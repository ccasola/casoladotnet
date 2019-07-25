import axios from "axios";

const AxiosPlugin = {
  install() {
    axios.interceptors.request.use(function(config) {
      var qs = require("qs");
      config.paramsSerializer = params => {
        return qs.stringify(params, {
          arrayFormat: "repeat"
        });
      };
      return config;
    });

    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error.response);
      }
    );
  }
};

export default AxiosPlugin;
