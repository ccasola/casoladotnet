const setObject = key => (state, payload) => {
  state[key] = { ...payload };
};

export default setObject;
