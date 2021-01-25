import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  CHANGE_FILTER
} from './actionTypes';

export const fetchRecipesRequest = () =>  {
  return {
    type: FETCH_RECIPES_REQUEST
  }
}

export const fetchRecipesSuccess = recipes =>  {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes
  }
}

export const fetchRecipesFailure = error =>  {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error
  }
}

export const fetchCategoriesRequest = () =>  {
  return {
    type: FETCH_CATEGORIES_REQUEST
  }
}

export const fetchCategoriesSuccess = recipes =>  {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: recipes
  }
}

export const fetchCategoriesFailure = error =>  {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  }
}
