import React from 'react';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }


  render() {
    const { menu } = this.state;

    return (
      <div>
        <header className="header">
          <a
            className="company-name"
            href="#link"
          >
          team awesome
          </a>

          <button
            className={`
              menu-button menu-button${menu ? '--clicked' : ''}
              `}
            type="submit"
            onClick={() => this.setState({ menu: !menu })}
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
        <nav className={`
          main-navigation main-navigation${menu ? '--open' : ''}
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
        </nav>
      </div>
    );
  }
}

export default Header;
