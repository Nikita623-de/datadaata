import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const activeLink = 'nav__link nav__link--active';
  const normalLink = 'nav__link';
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo header__logo">
            ВАМ КОЛЁСА
          </Link>
          <nav className="nav">
            <ul className={`nav__list burger-menu-list ${menuOpen ? 'open' : ''}`}>
              <img src="./images/close.png" alt="" onClick={() => setMenuOpen(!menuOpen)} />
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  главная{' '}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tire-wheels"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  шины и диски
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  о нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <div className="burger-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header__place">
              <span className="header__place-text">екатеринбург</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
