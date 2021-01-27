import 'cross-fetch/polyfill';
import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  CHANGE_FILTER,
} from './actionTypes';

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipesFailure = error => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = recipes => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: recipes,
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

export const fetchRecipes = url => dispatch => {
  dispatch(fetchRecipesRequest);
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error - 404 not found');
      }
      return response.json();
    })
    .then(data => {
      dispatch(fetchRecipesSuccess(data.meals));
    })
    .catch(error => {
      dispatch(fetchRecipesFailure(error));
    });
};

export const fetchCategories = url => dispatch => {
  dispatch(fetchCategoriesRequest);
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error - 404 not found');
      }
      return response.json();
    })
    .then(data => {
      dispatch(fetchCategoriesSuccess(data.categories));
    })
    .catch(error => {
      dispatch(fetchCategoriesFailure(error));
    });
};
