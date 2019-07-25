import serverErrorHandler from "./serverErrorHandler.js";

const withErrorHandler = (action, handler, message) => {
  return (...actionParams) => {
    return action(...actionParams).catch(error => {
      var { dispatch } = actionParams[0];
      if (!handler) {
        handler = serverErrorHandler;
      }
      handler(message)(dispatch, error);
    });
  };
};

export default withErrorHandler;
