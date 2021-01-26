import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import filter from './filter';
import categoryReducer from './categoryReducer';

export default combineReducers({
  recipe: recipeReducer,
  filter,
  category: categoryReducer,
});
