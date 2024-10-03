import { storeState, changeState } from '../src/js/utils.js';

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