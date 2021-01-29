import { CATEGORY_FILTERS } from '../constants';

export const getRecipesState = store => store.recipe;
export const getRecipeList = store => (getRecipesState(store) || null);

export const getRecipeByFilter = (store, filter) => {
  const allRecipes = getRecipeList(store);
  switch (filter) {
    case CATEGORY_FILTERS.ALL:
      return allRecipes;
    default:
      return {
        ...allRecipes,
        recipes: allRecipes.recipes.filter(recipe => recipe.strCategory === filter),
      };
  }
};

export const getRecipeById = (recipeList, id) => {
  const { recipes } = recipeList;
  return recipes.filter(recipe => recipe.idMeal === id.toString())[0];
};

export const getCategoriesState = store => store.category;
export const getCategoriesList = store => (getCategoriesState(store) || null);
