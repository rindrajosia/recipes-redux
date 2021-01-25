import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import filter from './categorieFilter';
import categoryReducer from './categoryReducer';

export default combineReducers({
  recipe: recipeReducer,
  filter: filter,
  category: categoryReducer
});
