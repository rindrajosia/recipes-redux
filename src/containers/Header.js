import React from 'react';
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/cart.png';
import Menu from './MenuComponent';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" >Home </Link></li>
              <li><Link to="/about" >About</Link></li>
            </ul>
          </nav>
          <img className="cart-icon" src={Cart} alt="cart" />
          <Menu handleClick={()=> handleClick()}/>
        </div>
    </div>
  )
};

export default Header;
