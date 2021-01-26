import React from 'react';

const Recipe = ({ recipe }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  return (
    <div className="col-4-wrap">
      <img src={strMealThumb} alt="product" />
      <h4>{strMeal}</h4>
      <p>Id: {idMeal}</p>
      <a href="#" className="btn">Explore Now </a>
    </div>
  )
}

export default Recipe;
