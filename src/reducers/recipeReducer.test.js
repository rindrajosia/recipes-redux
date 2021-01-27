import reducer, { initialState } from './recipeReducer';
import { fetchRecipesRequest, fetchRecipesSuccess, fetchRecipesFailure } from '../actions';

describe('Filter reducer', () => {
  it('should return the initial state', () => {
    const actual = reducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('fetchRecipesRequest action should work', () => {
    const state = { ...initialState, loading: false };
    const actual = reducer(state, fetchRecipesRequest());
    const expected = { ...initialState, loading: true };
    expect(actual).toEqual(expected);
  });

  it('fetchRecipesRequest action should not work', () => {
    const state = { ...initialState, loading: false };
    const actual = reducer(state, fetchRecipesRequest());
    const expected = { ...initialState, loading: false };
    expect(actual).not.toEqual(expected);
  });

  it('fetchRecipesSuccess action should work', () => {
    const state = { ...initialState, loading: true, error: '404 Page not fonud' };
    const recipe = ['Meals'];
    const actual = reducer(state, fetchRecipesSuccess(recipe));
    const expected = {
      ...initialState, loading: false, recipes: ['Meals'], error: '',
    };
    expect(actual).toEqual(expected);
  });

  it('fetchRecipesSuccess action should not work', () => {
    const state = { ...initialState, loading: true, error: '404 Page not fonud' };
    const recipe = ['Meals'];
    const actual = reducer(state, fetchRecipesSuccess(recipe));
    const expected = {
      ...initialState, loading: false, recipes: [''], error: '',
    };
    expect(actual).not.toEqual(expected);
  });

  it('fetchRecipesFailure action should work', () => {
    const state = { ...initialState, loading: true, recipes: ['Meals'] };
    const error = '404 Page not fonud';
    const actual = reducer(state, fetchRecipesFailure(error));
    const expected = { ...initialState, error: '404 Page not fonud' };
    expect(actual).toEqual(expected);
  });

  it('fetchRecipesFailure action should not work', () => {
    const state = { ...initialState, loading: true, recipes: ['Meals'] };
    const error = '404 Page not fonud';
    const actual = reducer(state, fetchRecipesFailure(error));
    const expected = { ...initialState, error: '' };
    expect(actual).not.toEqual(expected);
  });
});
