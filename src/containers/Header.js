import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/cart.png';
import Menu from './MenuComponent';

const Header = props => {
  const handleClick = () => props.clickHandler();
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul id="menu-items">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <img className="cart-icon" src={Cart} alt="cart" />
        <Menu handleClick={() => handleClick()} />
      </div>
    </div>
  );
};

Header.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Header;
