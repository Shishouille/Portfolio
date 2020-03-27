import React from 'react';
import StyledTitle from './StyledTitle';
import theWanderExample from 'src/assets/images/theWanderExample.PNG'

import StyledProjects from './StyledProjects';

const Projects = () => (
  <>
    <StyledTitle>Current Projects</StyledTitle>
    <StyledProjects>
      <article>
        <h2>The Wander</h2>
        <img className="projects-image" src={theWanderExample} alt="The Wander" />
        <p>Create your own stars with others in a collaborative universe.</p>
      </article>
      <article>
        <h2>New Projects Coming Soon !</h2>
      </article>
    </StyledProjects>
  </>
);

export default Projects;
