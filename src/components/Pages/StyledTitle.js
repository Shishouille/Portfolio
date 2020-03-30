import styled, { keyframes } from 'styled-components';
import theme from 'src/styles/theme';

const FadeIn = keyframes`
from { 
  opacity: 0;
  }
to { 
  opacity: 30%;
  }`;

const StyledTitle = styled.h1`
    position: fixed;
    font-weight: normal;
    font-size: 10em;
    left: 2%;
    opacity:30%;
    font-family: 'Playfair Display', serif;
    color: ${theme.color.alt};
    text-transform: uppercase;
    animation-name: ${FadeIn};
    animation-duration: .5s;
    animation-timing-function: cubic-bezier(.445,.05,.55,.95);

    @media (max-width: 768px) {
      font-size: 3em;
      padding-top: 1em;
    }
 `;

export default StyledTitle;
