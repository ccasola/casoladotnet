const set = key => (state, payload) => {
  state[key] = payload;
};

export default set;
