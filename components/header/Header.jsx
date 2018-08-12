import React from 'react';

import './header.scss';

class Header extends React.Component {
  state = {
    isMenuVisible: false
  }

  toggleMenu = () => {
    this.setState(({ isMenuVisible }) => ({
      isMenuVisible: !isMenuVisible
    }));
  }

  render() {
    const { isMenuVisible } = this.state;

    return (
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
              menu-button menu-button${isMenuVisible ? '--clicked' : ''}
              `}
            type="submit"
            onClick={this.toggleMenu}
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
          <a
            href="#link"
            className="main-navigation__item main-navigation__item--active"
          >
          Timesheets
          </a>
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
          type="submit"
        >
          <img
            src="/../../static/icons/1_humanoids_logo.png"
            alt=""
            className="main-navigation__profile-button--company-logo"
          />
          <img
            src="/../../static/icons/jelle.jpg"
            width="32px"
            height="32px"
            alt=""
            className="main-navigation__profile-button--user-icon"
          />
        </button>
      </header>
    );
  }
}

export default Header;
