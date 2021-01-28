import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getRecipeById, getRecipeList } from '../redux/selectors';

const Recipe = ({ match, recipeData }) => {
  const history = useHistory();
  const { id } = match.params;
  const details = getRecipeById(recipeData, id);
  const goBackHandle = () => {
    history.goBack();
  };
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
              <button type="button" onClick={goBackHandle} className="btn btn-single">Go Back </button>
            </div>
          </>
        ) : (
          <div className="col-4-wrap info">
            <h2>404 Pages not found </h2>
            <button type="button" onClick={goBackHandle} className="btn btn-single">Go Back </button>
          </div>
        )}

      </div>
    </div>
  );
};

Recipe.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  recipeData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const recipeData = getRecipeList(state);
  return { recipeData };
};

export default connect(
  mapStateToProps,
  null,
)(Recipe);
