/* 
Sets an objects properties in state with a payload object.

Useful for userpreferences - to have default values for the application that can be overridden.

Note: Does not create a new object, if default state does not include the key, reactivity will not happen.
*/
const setReducedObject = key => (state, payload) => {
  state[key] = payload.reduce((obj, item) => (obj[item.key] = item.value));
};

export default setReducedObject;
