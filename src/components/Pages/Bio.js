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
    console.log(counter);
  };
  return (
    <>
      <StyledTitle>Hello World!</StyledTitle>
      <StyledBioIntro>
        <div className="bio-profile">
          <img src={profilePicture} className="bio-picture" alt="Me" />
          <legend className="bio-legend">
            <h2 className="bio-legend-text">Looking for a job</h2>
          </legend>
        </div>
        <article className="bio-article">
          <h2 className="bio-article-title">About me</h2>
          <p>
            Du cursus universitaire à l'école en téléprésentiel, je suis une développeuse web à la recherche d'une entreprise qui n'hésite pas à mettre des ressources dans le leadership : Je suis convaincue qu'une équipe soudée, avec un leader légitime qui connait les qualités et défauts de chaque membre (et par conséquent sait les gérer/ mettre en avant) est la clé du succès.
            En tant que membre de cette future équipe, vous trouverez quelqu'un à l'écoute de ses émotions, et attentive à celle des autres. Je suis à fond pour l'entraide ! Un problème complexe est toujours plus facilement résolu à plusieurs.
            Une fois intégrée, j'ai une réelle envie de créer des liens, d'apprendre, de grandir et d'évoluer avec vous. Vous trouverez quelqu'un qui sait s'adapter et prendre rapidement ses marques dans un nouvel environnement.
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
    </>
  );
};

export default Bio;
