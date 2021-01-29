import React from 'react';
import Gallery from '../assets/images/josia.png';

const About = () => (
  <div className="small-container single-product">
    <div className="row">
      <div className="col-2">
        <img className="img-single" src={Gallery} alt="" />
      </div>
      <div className="col-2">
        <h1>About</h1>
        <h3>Project specifications </h3>
        <br />
        <p className="instructions">
          This project is based on a catalogue of recipes.
          It is not an app to help you make a recipe, it is just,
          a browsable list of items that you can filter and access
          to the details of one item.
          {' '}
        </p>
        <div className="instructions">
          This webapp has 3 types of pages:
          <ul>
            <li>- one page with a list of items that could be filtered by category;</li>
            <li>- one page for the item details;</li>
            <li>- one page for the Project specifications;</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
