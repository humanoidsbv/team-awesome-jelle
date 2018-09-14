import React from 'react';

import PropTypes from 'prop-types';
import Link from 'next/link';

import './main-navigation.scss';

const MainNavigation = ({ isMenuVisible }) => (
  <React.Fragment>
    <nav className={`
      main-navigation
      main-navigation--${isMenuVisible ? 'open' : 'close'}
    `}
    >
      <Link href="/timesheets">
        <a className="main-navigation__item main-navigation__item--active">
          Timesheets
        </a>
      </Link>
      <Link href="/team-members">
        <a className="main-navigation__item">
         Team members
        </a>
      </Link>
      <a className="main-navigation__item">
         Projects
      </a>
      <Link href="/clients">
        <a className="main-navigation__item">
           Clients
        </a>
      </Link>
      <a className="main-navigation__item">
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
      <img
        alt="search-icon"
        className="main-navigation__arrow-button"
        src="/../../static/icons/arrow-down.svg"
        height="5px"
        width="5px"
      />
    </button>
  </React.Fragment>
);

MainNavigation.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired
};

export default MainNavigation;
