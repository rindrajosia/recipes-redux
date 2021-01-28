import React from 'react';

import { Link } from 'react-router-dom';

const Error = () => (
  <div className="small-container">
    <div className="row-wrap">
      <div className="col-4-wrap info">
        <h2>404 Pages not found </h2>
        <Link to="/" className="btn">Go Back </Link>
      </div>
    </div>
  </div>
);

export default Error;
