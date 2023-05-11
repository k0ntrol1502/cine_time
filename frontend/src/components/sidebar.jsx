import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css'
export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About Us
      </a>
      <a className="menu-item" href="/contact">
        Contact Us
      </a>
    </Menu>
  );
};