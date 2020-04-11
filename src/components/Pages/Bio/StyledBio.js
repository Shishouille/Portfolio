import styled, { keyframes } from 'styled-components';
import theme from 'src/styles/theme';

// Animation

const fastZoom = keyframes`
from { 
  transform: scale(1); 
  }
50% { 
  transform: scale(1.1); 
    }
to { 
  transform: scale(1); 
  }`;

const FadeIntro = keyframes`
from { 
  transform: translate(0, 30%);
  opacity: 0;
  }
to { 
  transform: translate(0); 
  opacity: 100%;
  }`;

// Styled Components

const StyledBioIntro = styled.main`
    color: ${theme.color.main};
    padding-top: 5em;
    display: flex;
    justify-content: space-around;
    text-align: end;
    .bio-article {
      width: 55%;
      z-index: 2;
      line-height: 2em;
      animation-name: ${FadeIntro};
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      font-family: ${theme.font.title};
    }
    .bio-article-title {
      margin-top: .5em;
      margin-bottom: .5em;
      font-size: 1.5em;
    }
    .bio-article-text {
      font-family: ${theme.font.text};
      font-size: 1.2em;
    }
    .bio-profile {
      position: relative;
      animation-name: ${FadeIntro};
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      height:50%;
    }
    .bio-picture {
      clip-path: circle(40% at 50% 40%);
      width: 20em;
    }
    .bio-legend {
      position: absolute;
      border-radius: 2em;
      padding-left: .3em;
      padding-right: .3em;
      border: 1px solid ${theme.color.alt};
      font-size: 1.2em;
      background-color: rgba(255, 255, 255, 0.7);
      right: 0;
      bottom: 30%;
    }
    .bio-legend-text {
      font-family: ${theme.font.text};
      color: ${theme.color.main};
      font-weight: lighter;
      font-size: 1em;
    }

    .bio-link {
      text-decoration: underline;
      color: ${theme.color.alt};
      font-weight: bold;
    }

    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .bio-article {
      width: 100%;
      height: 100%;
    }
    .bio-legend {
      right: 20%;
      bottom: 38%;
    }
  }
 `;


const StyledBioHobbies = styled.section`
  color: ${theme.color.main};
  font-family: ${theme.font.title};
  padding-top: 2em;
  width: 100%;
  animation-name: ${FadeIntro};
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
  /* height: 20vh; */
  text-align: center;
  .bio-image-hobby {
    width: 4em;
    height: 4em;
    margin-top: 1em;
    cursor: pointer;
    &:hover {
      animation: ${fastZoom} .6s infinite;
      }
  }
  .bio-animated-circle {
      width: 4rem;
      height: 4rem;
      font-size: 1em;
      margin: auto;
      margin-top: 1em;
      background-color: ${theme.color.alt};
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        /* animation-name: ${fastZoom};
        animation-duration: .5s;
        animation-timing-function: ease-in-out; */
        animation: ${fastZoom} .6s infinite;
      }
    }
  .bio-clickme {
    width: 4em;
    padding: .9em;
    height: 4em;
  }
  .bio-hobbies {
    margin-top: 1em;
    font-weight: lighter;
    font-family: ${theme.font.text};
  }
  .bio-aside {
    margin-bottom: 1em;
  }
`;

export { StyledBioIntro, StyledBioHobbies };