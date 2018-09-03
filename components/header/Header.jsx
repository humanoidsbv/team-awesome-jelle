import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './header.scss';

const Header = ({ isMenuVisible, onToggleMenu }) => (
  <header className="header">
    <div className="header__mobile">
      <a
        className="company-name"
        href="#link"
      >
      team awesome
      </a>

      <button
        className={`
          menu-button
          menu-button--${isMenuVisible ? 'clicked' : ''}
          `}
        type="submit"
        onClick={onToggleMenu}
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
    </div>
    <nav className={`
      main-navigation
      main-navigation--${isMenuVisible ? 'open' : 'close'}
    `}
    >
      <Link href="/timesheets">
        <a
          href="/timesheets"
          className="main-navigation__item main-navigation__item--active"
        >
        Timesheets
        </a>
      </Link>
      <Link href="/team-members">
        <a
          href="#link"
          className="main-navigation__item"
        >
         Team members
        </a>
      </Link>
      <a
        href="#link"
        className="main-navigation__item"
      >
         Team members
      </a>
      <a
        href="#link"
        className="main-navigation__item"
      >
         Projects
      </a>
      <a
        href="#link"
        className="main-navigation__item"
      >
         Clients
      </a>
      <a
        href="#link"
        className="main-navigation__item"
      >
         Documents
      </a>
    </nav>
    <button
      className="main-navigation__profile-button"
      type="button"
    >
      <img
        src="/../../static/icons/1_humanoids_logo.png"
        alt=""
        className="main-navigation__company-logo"
      />
      <img
        src="/../../static/icons/jelle.jpg"
        width="32px"
        height="32px"
        alt=""
        className="main-navigation__user-icon"
      />
    </button>
    <button
      className="main-navigation__arrow-button"
      type="button"
    >
      <img
        alt="search-icon"
        src="/../../static/icons/arrow-down.svg"
        height="5px"
        width="5px"
      />
    </button>

  </header>
);

Header.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired
};

export default Header;
