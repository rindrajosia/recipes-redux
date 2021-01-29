import React from 'react';
import Play from '../assets/images/play-store.png';
import App from '../assets/images/app-store.png';
import Logo from '../assets/images/logo-white.png';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col-1">
          <h3>Download Our App</h3>
          <p>Download App for Android and ios mobile phone.</p>
          <div className="app-logo">
            <img src={Play} alt="Play store" />
            <img src={App} alt="App store" />
          </div>
        </div>
        <div className="footer-col-2">
          <img src={Logo} alt="logo" />
          <p>Nothing brings people together like good food...</p>
        </div>
        <div className="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2021 - Rindra Josia</p>
    </div>
  </div>
);

export default Footer;
