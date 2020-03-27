import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNav from '.';


const Navigation = () => (
  <StyledNav>
    <div>
      <NavLink
        to="/"
        activeClassName="selected"
      >
        Shirin Boomi
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/"
        activeClassName="selected"
      >
        Bio
      </NavLink>
      <NavLink
        to="/skills"
        activeClassName="selected"
      >
        Skills
      </NavLink>
      <NavLink
        to="/projects"
        activeClassName="selected"
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="selected"
      >
        Contact
      </NavLink>
    </div>
  </StyledNav>
);

export default Navigation;
