import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-family: 'Playfair Display', serif;
  color: black;
    .selected {
      font-style: italic;
    }
    .nav-link {
      margin-right: 2em;
      position: relative;
    }
 `;

export default StyledNav;

/* &::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  margin-top: -1.4em;
} */