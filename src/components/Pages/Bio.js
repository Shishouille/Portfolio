import React, { useState } from 'react';

import profilePicture from 'src/assets/images/avatar-portfolio.jpeg';
import boxe from 'src/assets/images/icons/boxing-gloves.svg';
import camera from 'src/assets/images/icons/camera.svg';
import gamepad from 'src/assets/images/icons/gamepad.svg';
import lightbulb from 'src/assets/images/icons/idea.svg';
import palette from 'src/assets/images/icons/paint-palette.svg';
import pencil from 'src/assets/images/icons/pencil.svg';
import radio from 'src/assets/images/icons/radio.svg';


import StyledTitle from './StyledTitle';
import { StyledBioIntro, StyledBioHobbies } from './StyledBio';


const Bio = () => {
  const hobbies = [
    '...',
    ' listening to podcasts.',
    ' boxe.',
    ' take nature and people in photographs.',
    ' draw sometimes.',
    ' play videogames.',
    ' understand design.',
    ' learn stuff.'];

  const hobbiesPictures = ['', radio, boxe, camera, pencil, gamepad, palette, lightbulb];
  const [counter, setCounter] = useState(0);
  const [hobby, setHobby] = useState(false);
  const handleHobbies = () => {
    setHobby(true);
    setCounter(Number(counter + 1));
    if (counter > hobbies.length - 2) {
      setCounter(0);
      setHobby(false);
    }
  };
  return (
    <div style={{ minHeight: '100vh' }}>
      <StyledTitle>Bio</StyledTitle>
      <StyledBioIntro>
        <div className="bio-profile">
          <img src={profilePicture} className="bio-picture" alt="Me" />
          <legend className="bio-legend">
            <h2 className="bio-legend-text">Front-end Developper</h2>
          </legend>
        </div>
        <article className="bio-article">
          <h2 className="bio-article-title">About me</h2>
          <p className="bio-article-text">
            From a psychology degree to a remote dev school, I am now a web Developper looking for a team with a strong leadership. A great team cooperation has to go by knowing weaknesses and qualities of each other. Then, we can deal with the bad and excel with the good.
          </p>
          <p className="bio-article-text">
            As a future member of your team, if you're looking for hire, here are mine :
          </p>
          <p className="bio-article-text">
            I am a great listener, with a good empathy. I care a lot about other people. I am a moral person with principles. I can adapt easily. But I can get overwhelmed by my emotions, be easily bored, and a little stubborn.
          </p>
          <h2 className="bio-article-title">Where will I go ?</h2>
          <p className="bio-article-text">
            I want to move from where I am now : Corsica (France). I can go anywhere in Europe : from Spain to Norway.
            My luggages are ready!
          </p>
        </article>
      </StyledBioIntro>
      <StyledBioHobbies>
        <h2>Hobbies</h2>
        <aside className="bio-aside">
          {!hobby && (<div onClick={handleHobbies} className="bio-animated-circle"><p className="bio-clickme">...</p></div>)}
          {hobby && (<img onClick={handleHobbies} className="bio-image-hobby" src={hobbiesPictures[counter]} alt="Click Me!" title="Click Me!" />)}
          <h3 className="bio-hobbies">I like to {hobbies[counter]} </h3>
        </aside>
      </StyledBioHobbies>
    </div>
  );
};

export default Bio;
