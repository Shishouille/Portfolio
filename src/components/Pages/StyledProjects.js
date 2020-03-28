import styled, { keyframes } from 'styled-components';
import theme from 'src/styles/theme';

const FadeIntro = keyframes`
from { 
  transform: translate(0, 30%);
  opacity: 0;
  }
to { 
  transform: translate(0); 
  opacity: 100%;
  }`;

const StyledProjects = styled.main`
    color: ${theme.color.main};
    font-family: ${theme.font.title};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 100vh;
    animation-name: ${FadeIntro};
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    .project-main {
      margin-bottom: 3em;
    }
    .projects-image {
        border-radius: 2em;
        margin-top: 1em;
        margin-bottom: 1em;
        width: 30em;
        &:hover {
          box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.5);
        }
    }
    .projects-description {
        font-family: ${theme.font.text};
    }
 `;

export default StyledProjects;
