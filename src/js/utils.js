export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

export const stateControl = storeState();

export const changeStateFunctions = {
  feed: changeState("soil")(1),
  water: changeState("water")(1),
  spotlight: changeState("light")(1),
  megaFeed: changeState("soil")(5),
  superWater: changeState("water")(5),
  floodlight: changeState("light")(5)
}