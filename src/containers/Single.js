import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipeById, getRecipeList } from '../redux/selectors';

const Recipe = ({ match, recipeData }) => {
  const { id } = match.params;
  const details = getRecipeById(recipeData, id);
  return (
    <div className="small-container single-product">
      <div className="row">
        {details ? (
          <>
            <div className="col-2">
              <img className="img-single" src={details.strMealThumb} alt="" />
            </div>
            <div className="col-2">
              <h1>{details.strMeal}</h1>
              <h4>
                Id:
                {details.idMeal}
              </h4>
              <h3>Instructions: </h3>
              <br />
              <p className="instructions">{details.strInstructions}</p>
              <Link to="/" className="btn">Go Back </Link>
            </div>
          </>
        ) : (
          <div className="col-4-wrap info">
            <h2>404 Pages not found </h2>
            <Link to="/" className="btn">Go Back </Link>
          </div>
        )}

      </div>
    </div>
  );
};

Recipe.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  recipeData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => {
  const recipeData = getRecipeList(state);
  return { recipeData };
};

export default connect(
  mapStateToProps,
  null,
)(Recipe);
