import styled, { keyframes } from 'styled-components';

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

const StyledSkills = styled.main`
    color: black;
    display:flex;
    justify-content: center;
    text-align: center;
    flex-flow: column wrap;
    .skills-content {
      width:100%;
    }
    .skills-icon {
      width: 4em;
      height: 4em;
      &:hover {
      animation-name: ${wiggle};
      animation-duration: .3s;
      animation-timing-function: linear;
      }

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
    .skills-package {
      background-color: rgba(255, 255, 255, 0.5);
      border: 2px solid white;
      border-radius: .2em;
      position: relative;
      padding: 1em;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5em;
     
    }
    .skills-soft {
      margin: 1em;
    }
    .skills-soft-title {
      margin-bottom: .5em;
    }
    .skills-title {
      padding: 1em;
    }
    .skills-subtitle {
      font-style: italic;
      margin-bottom: .5em;
      margin-top: .5em;
    }
    .skills-name {
      text-decoration: underline;
      font-weight: normal;
      padding-bottom: 1em;
    }
 `;

export default StyledSkills;

// transition: transform 1s cubic-bezier(.19,1,.22,1);