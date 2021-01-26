import React from 'react';

const Recipe = ({ recipe }) => {
  return(
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
            <img class="img-single" src="assets/images/gallery-1.jpg" alt=""/>
        </div>
        <div className="col-2">
            <p>Link</p>
            <h1>Meal</h1>
            <h4>$50</h4>
            <h3>Instructions: </h3>
            <br/>
            <p>Give your summer wardrobe a style upgrade.
              Give your summer wardrobe a style upgrade.
              Give your summer wardrobe a style upgrade.
              Give your summer wardrobe a style upgrade.</p>
        </div>
      </div>
    </div>
  )
}
