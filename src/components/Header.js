import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/cart.png';
import Menu from './MenuComponent';

const Header = () => {
  const menuRef = React.createRef();

  const handleClick = () => {
    const menuItems = menuRef.current;
    if (menuItems.style.height === '0px' || menuItems.style.height === '') {
      menuItems.style.height = '70px';
    } else {
      menuItems.style.height = '0px';
    }
  };

  const handleClickList = () => {
    const menuItems = menuRef.current;
    if (menuItems.style.height === '70px') {
      menuItems.style.height = '0px';
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul id="menu-items" ref={menuRef}>
            <li><Link to="/" onClick={handleClickList}>Home </Link></li>
            <li><Link to="/about" onClick={handleClickList}>About</Link></li>
          </ul>
        </nav>
        <img className="cart-icon" src={Cart} alt="cart" />
        <Menu handleClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default Header;
