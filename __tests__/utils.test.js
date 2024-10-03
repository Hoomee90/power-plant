import { storeState, changeState, changeStateFunctions } from '../src/js/utils.js';

describe('storeState', () => {
  let stateControlTest;

  beforeEach(() => {
    stateControlTest = storeState();
  });

  test('is defined', () => {
    expect(storeState).toBeDefined();
  });

  test('returns empty state object', () => {

    expect(stateControlTest()).toEqual({});
  });
});

describe('changeState', () => {
  let stateControlTest;

  beforeEach(() => {
    stateControlTest = storeState();
  });

  test('returns correct functions', () => {
    expect(changeState("water")(3)({})).toEqual({ water: 3 });
  });
});

describe('changeStateFunction', () => {

  test.each([
    ["feed", "soil", 1],
    ["water", "water", 1],
    ["spotlight", "light", 1],
    ["megaFeed", "soil", 5],
    ["superWater", "water", 5],
    ["floodlight", "light", 5]
  ])('.%s({})', (changeState, prop, value) => {
    expect(changeStateFunctions[changeState]({})).toEqual({ [prop]: value })
  });
});