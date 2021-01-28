import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../assets/images/menu.png';

const MenuComponent = props => {
  const { handleClick } = props;
  return (
    <button className="btn-icon" type="button" onClick={e => handleClick(e)}>
      <img
        className="menu-icon"
        src={Menu}
        alt="cart"
      />
    </button>
  );
};

MenuComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MenuComponent;
