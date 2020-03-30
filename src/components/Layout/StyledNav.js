import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-family: ${theme.font.title};
  color:  ${theme.color.main};
  transition: .5s ease;
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
    @media (max-width: 768px) {
      font-size: .8em;
      .nav-link {
        font-size: 1.2em;
      }
    }
    .nav-burger {
      width: 2em;
      height: 2em;
      background-color: ${theme.color.main};
      border-radius: 50%;
      transition: rotate .5s ease;
      position: relative;
      cursor: pointer;
      &::after {
        content: "S";
        color: ${theme.color.alt};
        top: 50%;
        right: 50%;
        margin: auto;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 1em;
        text-align: center;
      }
      &:focus::after {
        transform: rotate(0.5turn); 
      }

    }
    .nav-quit {
      width: 2em;
      height: 2em;
      text-align: center;
      background-color: ${theme.color.alt};
      border-radius:50%;
    }
    
 `;

export default StyledNav;