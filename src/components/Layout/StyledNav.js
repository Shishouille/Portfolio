import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-family: ${theme.font.title};
  color:  ${theme.color.main};
    .selected {
      color:  ${theme.color.alt};
    }
    .nav-main {
      font-size: 1.2em;
    }
    .nav-link {
      margin-right: 2em;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        top: 95%;
        left: 0;
        background: ${theme.color.line};
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
 `;

export default StyledNav;