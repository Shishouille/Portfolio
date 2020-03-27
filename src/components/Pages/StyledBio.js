import styled, { keyframes } from 'styled-components';

// Animation

const fastZoom = keyframes`
from { 
  transform: scale(1); 
  }
50% { 
  transform: scale(1.2); 
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
    color: rgb(11, 0, 84);
    padding-top: 2em;
    display: flex;
    justify-content: space-around;
    /* height: 60vh; */
    text-align: end;
    .bio-article {
      width: 50%;
      line-height: 2em;
      animation-name: ${FadeIntro};
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      font-family: 'Playfair Display', serif;
    }
    .bio-article-title {
      margin-bottom: .5em;
      font-size: 1.5em;
    }
    .bio-profile {
      position: relative;
      animation-name: ${FadeIntro};
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
    }
    .bio-picture {
      clip-path: circle(40% at 50% 40%);
      width: 20em;
    }
    .bio-legend {
      position: absolute;
      color: black;
      border: 1px solid pink;
      background-color: white;
      right: 0;
      bottom: 30%;
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
      position: absolute;
      color: paleturquoise;
      right: 20%;
      bottom: 38%;
    }
  }
 `;


const StyledBioHobbies = styled.section`
  color: rgb(11, 0, 84);
  font-family: 'Playfair Display', serif;
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
    &:hover {
        animation-name: ${fastZoom};
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
      }
  }
  .bio-animated-circle {
      width: 4rem;
      height: 4rem;
      font-size: 1em;
      margin: auto;
      margin-top: 1em;
      background-color: lightgrey;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        animation-name: ${fastZoom};
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
      }
    }
  .bio-clickme {
    width: 4em;
    padding: .5em;
    height: 4em;
  }
  .bio-hobbies {
    margin-top: 1em;
    font-weight: lighter;
}
`;

export { StyledBioIntro, StyledBioHobbies };