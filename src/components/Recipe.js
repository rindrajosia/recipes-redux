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
      <Link
        to={
        {
          pathname: '/recipe',
          state: {
            recipe: { ...recipe },
          },
        }
      }
        className="btn"
      >
        Explore Now
      </Link>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.objectOf.isRequired,
};

export default Recipe;
