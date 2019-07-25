const messageErrorHandler = message => {
  return dispatch => {
    dispatch("error/notify", message, { root: true });
  };
};

export default messageErrorHandler;
