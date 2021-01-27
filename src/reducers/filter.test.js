import filter, { initialState } from './filter';
import { changeFilter } from '../actions';

describe('Filter reducer', () => {
  it('should return the initial state', () => {
    const actual = filter(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('should not return the initial state', () => {
    const actual = filter('Test', {});
    const expected = initialState;
    expect(actual).not.toEqual(expected);
  });

  it('changeFilter action should work', () => {
    const key = 'Vegan';
    const actual = filter(initialState, changeFilter(key));
    const expected = 'Vegan';
    expect(actual).toEqual(expected);
  });

  it('changeFilter action should not work', () => {
    const actual = filter(initialState, {});
    const expected = 'Vegan';
    expect(actual).not.toEqual(expected);
  });
});
