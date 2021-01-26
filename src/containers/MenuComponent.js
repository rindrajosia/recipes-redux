import React from 'react';
import Menu from '../assets/images/menu.png';

const MenuComponent = props => {
  const { handleClick } = props;
  return(
    <img className="menu-icon"
    onClick={e => handleClick(e)}
    src={Menu} alt="cart" />
  )
}

export default MenuComponent;
