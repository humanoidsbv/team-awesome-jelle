import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <a
      className="company-name"
      href="#"
    >
      team awesome
    </a>

    <button
      className="menu-button"
      type="submit"
    >
      <img
        alt="menu-button"
        className="menu-button__icon--open"
        width="20px"
        height="20px"
        src="/static/icons/hamburger.svg"
      />
      <img
        alt="menu-button-close"
        className="menu-button__icon--close"
        height="20px"
        width="20px"
        src="/static/icons/close.svg"
      />
    </button>
  </header>
);


export default Header;
