import React from 'react';

import discord from 'src/assets/images/icons/discord.svg';
import github from 'src/assets/images/icons/github.svg';
import gmail from 'src/assets/images/icons/gmail.svg';
import linkedin from 'src/assets/images/icons/linkedin.svg';
import twitter from 'src/assets/images/icons/twitter.svg';

import StyledTitle from './StyledTitle';
import StyledContact from './StyledContact';


const Contact = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('Shishi#4230');
    alert('Discord copied');
  };
  return (
    <>
      <StyledTitle>Contact</StyledTitle>
      <StyledContact>
        <a href="mailto:shirin.boomi.dev@gmail.com" className="contact-link">
          <img src={gmail} alt="Mail" className="contact-icon" />
          <legend>Mail</legend>
        </a>
        <a href="https://www.linkedin.com/in/shirin-boomi/" className="contact-link">
          <img src={linkedin} alt="Linkedin" className="contact-icon" />
          <legend>Linkedin</legend>
        </a>
        <a href="https://twitter.com/BoomiShirin" className="contact-link">
          <img src={twitter} alt="Twitter" className="contact-icon" />
          <legend>Twitter</legend>
        </a>
        <div onClick={copyToClipboard} className="contact-link">
          <img src={discord} alt="Discord" className="contact-icon" />
          <legend>Discord (Shishi#4230)</legend>
        </div>
        <a href="https://github.com/Shishouille" className="contact-link">
          <img src={github} alt="Github" className="contact-icon" />
          <legend>Github</legend>
        </a>
      </StyledContact>
    </>
  );
};

export default Contact;
