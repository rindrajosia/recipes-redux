import React from 'react';
import Gallery from '../assets/images/josia.png';


const About = () => {
  return(
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
            <img className="img-single" src={Gallery} alt=""/>
        </div>
        <div className="col-2">
            <h1>Rindra Josia</h1>
            <h3>About me </h3>
            <br/>
            <h4>Hello, </h4>
            <p className="instructions">
            I am a full-stack developer that can work cross-functionally
            between the front-end and back-end while managing multiple
            projects ranging in priority levels. Proven experience developing
            customer-focused websites using Ruby on Rails, PHP, CSS, HTML, ES6,
            React and Redux. Designed and developed web applications across
            multiple APIs and Databases. </p>
        </div>
      </div>
    </div>
  )
}

export default About;
