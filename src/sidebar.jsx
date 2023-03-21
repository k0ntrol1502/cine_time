import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css'
export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Profile
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};