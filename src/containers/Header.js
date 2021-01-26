import React from 'react';
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
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Account</a></li>
            </ul>
          </nav>
          <img className="cart-icon" src={Cart} alt="cart" />
          <Menu handleClick={()=> handleClick()}/>
        </div>
    </div>
  )
};

export default Header;
