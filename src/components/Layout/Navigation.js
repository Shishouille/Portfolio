import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNav from './StyledNav';


const Navigation = () => (
  <StyledNav>
    <div className="nav-display">
      <NavLink
        to="/"
        className="nav-main"
      >
        Shirin Boomi
      </NavLink>
    </div>
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
  </StyledNav>
);

export default Navigation;
