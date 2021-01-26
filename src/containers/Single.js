import React from 'react';
import { useLocation, useHistory } from 'react-router';


const Recipe = () => {
  const loctation = useLocation();
  const history = useHistory();
  const { strMeal, idMeal, strInstructions, strMealThumb } = loctation.state.recipe;
  const goBackHandle = () => {
    history.goBack();
  }
  return(
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
            <img className="img-single" src={strMealThumb} alt=""/>
        </div>
        <div className="col-2">
            <h1>{strMeal}</h1>
            <h4>Id: {idMeal}</h4>
            <h3>Instructions: </h3>
            <br/>
            <p className="instructions">{strInstructions}</p>
            <span onClick={goBackHandle} className="btn">Go Back </span>
        </div>
      </div>
    </div>
  )
}

export default Recipe;
