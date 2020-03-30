import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { NavLink } from 'react-router-dom';
import StyledNav from './StyledNav';


const Navigation = () => {
  const [isMenuOpened, openMenu] = useState(false);
  const isBurger = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <StyledNav>
      {isBurger && !isMenuOpened && (
        <menu aria-labelledby="Open Menu" className="nav-burger" onClick={() => openMenu(true)} />
      )}
      {((!isMenuOpened && isBurger) || !isBurger) && (
      <div className="nav-display">
        <NavLink
          to="/"
          className="nav-main"
        >
          Shirin Boomi - Front-End Developper
        </NavLink>
      </div>
      )}
      {(!isBurger || isMenuOpened) && (
      <>
        {isMenuOpened && isBurger && (<nav className="nav-quit" onClick={() => openMenu(false)}>X</nav>)}
        <div className="nav-display nav-right">
          <NavLink
            to="/"
            activeClassName="selected"
            exact
            className="nav-link"
          >
            Bio
          </NavLink>
          <NavLink
            to="/skills"
            activeClassName="selected"
            exact
            className="nav-link"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="selected"
            exact
            className="nav-link"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="selected"
            exact
            className="nav-link"
          >
            Contact
          </NavLink>
        </div>
      </>
      )}
    </StyledNav>
  );
};

export default Navigation;
