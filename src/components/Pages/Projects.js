import React from 'react';

import theWanderExample from 'src/assets/images/theWanderExample.PNG';

import StyledTitle from './StyledTitle';


import StyledProjects from './StyledProjects';

const Projects = () => (
  <>
    <StyledTitle>Projects</StyledTitle>
    <StyledProjects>
      <article className="project-main">
        <h2>The Wander</h2>
        <a href="http://52.203.65.107/" target="_blank">
          <img className="projects-image" src={theWanderExample} alt="The Wander" />
          <p className="projects-description">Create your own stars with others in a collaborative universe.</p>
        </a>
      </article>
      <article>
        <h2>New Projects Coming Soon !</h2>
      </article>
    </StyledProjects>
  </>
);

export default Projects;
