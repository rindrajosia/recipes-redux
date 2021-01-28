import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  return (
    <div className="col-4-wrap">
      <img src={strMealThumb} alt="product" />
      <h4>{strMeal}</h4>
      <p>
        Id:
        {idMeal}
      </p>
      <Link to={`/recipe/${idMeal}`} className="btn">
        Explore Now
      </Link>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default Recipe;
