import styled, { keyframes } from 'styled-components';
import theme from 'src/styles/theme';

// ANIMATION

const FadeIntro = keyframes`
from { 
  transform: translate(0, 30%);
  opacity: 0;
  }
to { 
  transform: translate(0); 
  opacity: 100%;
  }`;

// COMPONENTS

const StyledSkills = styled.main`
    color: black;
    display:flex;
    justify-content: center;
    text-align: center;
    flex-flow: column wrap;

    .skills-header {
      display: flex;
      justify-content: space-around;
    }
    .skills-title {
      margin: 1em;
      padding-bottom: .5em;
      cursor: pointer;
      font-family: ${theme.font.title};
      position: relative;
      text-decoration: none;
      transition: 0.5s;
      color: ${theme.color.alt};
    }

    .right {
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
        transform-origin: left;
      }
      &:hover::after {
        transform: scaleX(1);
        font-style: italic;
        transform-origin: right;
      }
    }
    .left {
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
        font-style: italic;
        transform-origin: left;
      }
    }
    .subtitle {
      cursor: default;
      color:  ${theme.color.main};
    }
    .skills-content {
      width:100%;
      min-height: 100vh;
      animation-name: ${FadeIntro};
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
    }
    .skills-icon {
      width: 4em;
      height: 4em;
    }
    .skills-setup legend {
      color:  ${theme.color.main};
    }
    .skills-sub {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .skills-setup {
      width: 25%;
      font-size: .7em;
    }
    .skills-name {
      font-weight: normal;
      padding-bottom: 1em;
      font-family: ${theme.font.text};
      color: ${theme.color.main};
      transition: opacity 1s cubic-bezier(.445,.05,.55,.95);
      opacity: 10%;
    }
    .skills-container {
      margin-bottom: 5em;
      padding-top: 1em;
      padding-bottom: 1em;
      &:hover {
          .skills-name {
            opacity: 100%;
        }
        .skills-package {
          box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.3);
      }
    }
    }
    .skills-package {
      background-color: rgba(255, 255, 255, 0.4);
      border: 2px solid white;
      border-radius: .2em;
      position: relative;
      padding: 1em;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5em;
      transition: box-shadow 1s cubic-bezier(.445,.05,.55,.95);
    }

    .disabled {
        background: none;
        border: none;
        color: ${theme.color.alt}
      }

    .skills-soft-package {
      padding: 1em;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5em;
    }
    .skills-soft {
      margin: 1em;
      color: ${theme.color.main};
    }
    .skills-soft p {
      font-family: ${theme.font.text};
      margin: 1em;
    }
    .skills-soft-title {
      font-family: ${theme.font.title};
      margin-bottom: .5em;
      position: relative;
      text-decoration: none;
      transition: 0.5s;
      width:7em;
      margin:auto;
    }


    .skills-subtitle {
      font-style: italic;
      color: ${theme.color.main};
      margin-bottom: .5em;
      margin-top: .5em;
      font-family: ${theme.font.text};
    }

    @media (max-width: 768px) {
      .skills-name {
        opacity: 100%;
      }
      .skills-container {
        margin-bottom: 2em;
      }
      .skills-package {
        width:100%;
      }
    }
 `;

export default StyledSkills;

// transition: transform 1s cubic-bezier(.19,1,.22,1);
