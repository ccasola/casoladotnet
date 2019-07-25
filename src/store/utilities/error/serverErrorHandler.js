const serverErrorHandler = message => {
  return (dispatch, error) => {
    //`${error.status}-${error.statusText}`
    var { summary } = error.data;
    let output = undefined;
    if (message && summary) {
      output = `${message} (${summary})`;
    } else if (message && !summary) {
      output = message;
    } else if (!message && summary) {
      output = summary;
    }
    dispatch("error/notify", output, {
      root: true
    });
  };
};

export default serverErrorHandler;
