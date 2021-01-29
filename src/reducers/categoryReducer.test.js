import reducer, { initialState } from './categoryReducer';
import { fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions';

describe('categoryReducer reducer', () => {
  it('should return the initial state', () => {
    const actual = reducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('fetchCategoriesRequest action should work', () => {
    const state = { ...initialState, loading: false };
    const actual = reducer(state, fetchCategoriesRequest());
    const expected = { ...initialState, loading: true };
    expect(actual).toEqual(expected);
  });

  it('fetchCategoriesRequest action should not work', () => {
    const state = { ...initialState, loading: false };
    const actual = reducer(state, fetchCategoriesRequest());
    const expected = { ...initialState, loading: false };
    expect(actual).not.toEqual(expected);
  });

  it('fetchCategoriesSuccess action should work', () => {
    const state = { ...initialState, loading: true, error: '404 Page not fonud' };
    const category = ['Meals'];
    const actual = reducer(state, fetchCategoriesSuccess(category));
    const expected = {
      ...initialState, loading: false, categories: ['Meals'], error: '',
    };
    expect(actual).toEqual(expected);
  });

  it('fetchCategoriesSuccess action should not work', () => {
    const state = { ...initialState, loading: true, error: '404 Page not fonud' };
    const category = ['Meals'];
    const actual = reducer(state, fetchCategoriesSuccess(category));
    const expected = {
      ...initialState, loading: false, categories: [''], error: '',
    };
    expect(actual).not.toEqual(expected);
  });

  it('fetchCategoriesFailure action should work', () => {
    const state = { ...initialState, loading: true, categories: ['Meals'] };
    const error = '404 Page not fonud';
    const actual = reducer(state, fetchCategoriesFailure(error));
    const expected = { ...initialState, error: '404 Page not fonud' };
    expect(actual).toEqual(expected);
  });

  it('fetchCategoriesFailure action should not work', () => {
    const state = { ...initialState, loading: true, categories: ['Meals'] };
    const error = '404 Page not fonud';
    const actual = reducer(state, fetchCategoriesFailure(error));
    const expected = { ...initialState, error: '' };
    expect(actual).not.toEqual(expected);
  });
});
