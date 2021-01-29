import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes, changeFilter } from '../actions';
import { URL } from '../constants';

import { getRecipeByFilter } from '../redux/selectors';
import CategoryFilter from './CategoryFilter';
import Recipe from '../components/Recipe';

const RecipesList = ({ recipeData, fetchRecipes, changeFilter }) => {
  useEffect(() => {
    fetchRecipes(URL.RECIPES);
  }, [fetchRecipes]);

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>Recipes Categories</h2>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
      <div className="row-wrap">
        {recipeData.loading && <h2 className="info">Loading</h2>}
        {recipeData.error && <h2 className="info">{recipeData.error}</h2>}
        {
          recipeData && recipeData.recipes && recipeData.recipes.length
            ? recipeData.recipes.map(recipe => <Recipe key={recipe.idMeal} recipe={recipe} />) : (
              <h2 className="info">No Recipes for this category.</h2>
            )
        }
      </div>
    </div>
  );
};

RecipesList.propTypes = {
  recipeData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { filter } = state;
  const recipeData = getRecipeByFilter(state, filter);
  return { recipeData };
};

export default connect(
  mapStateToProps,
  { fetchRecipes, changeFilter },
)(RecipesList);
