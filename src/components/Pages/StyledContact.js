import styled, { keyframes } from 'styled-components';
import theme from 'src/styles/theme';

const wiggle = keyframes`
from { 
    transform: rotate(2deg);
  }
50% { 
    transform: rotate(-2deg); 
    }
to { 
    transform: rotate(2deg); 
  }`;

const FadeIntro = keyframes`
from { 
  transform: translate(0, 20%);
  opacity: 0;
  }
to { 
  transform: translate(0); 
  opacity: 100%;
  }`;

const StyledContact = styled.main`
    display: flex;
    overflow:hidden;
    position: relative;
    z-index: 2;
    color: ${theme.color.main};
    justify-content: space-around;
    text-align: center;
    font-size: 1.5em;
    align-items: center;
    flex-flow: column-wrap;
    width:100%;
    min-height:90vh;
    font-family: ${theme.font.text};
    animation-name: ${FadeIntro};
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;

    .contact-link {
        cursor: pointer;
    }
    .contact-icon {
        width: 5em;
    }
    .contact-icon:hover {
        animation-name: ${wiggle};
        animation-duration: .2s;
        animation-timing-function: linear;
    }

    @media (max-width: 768px) {
    display:block;
    margin-top: 2em;
    text-align: center;
    .contact-link {
        display:block;
        font-size: .7em;
        cursor: pointer;
        margin-bottom: 1em;
    }
    .contact-icon {
        width: 4em;
    }
    }
 `;

export default StyledContact;