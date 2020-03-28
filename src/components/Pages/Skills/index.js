import React, { useState } from 'react';

import StyledSkills from './StyledSkills';
import StyledTitle from '../StyledTitle';

import SkillsHard from './SkillsHard';
import SkillsSoft from './SkillsSoft';

const Skills = () => {
  const [isSoft, getSoft] = useState(false);
  return (
    <>
      <StyledTitle>Skills</StyledTitle>
      <StyledSkills>
        <header className="skills-header">
          <h2 className="skills-title left" onClick={() => getSoft(false)}>Hard Skills </h2>
          <h2 className="skills-title right" onClick={() => getSoft(true)}> Soft Skills</h2>
        </header>
        {!isSoft && <SkillsHard />}
        {isSoft && <SkillsSoft />}
      </StyledSkills>
    </>
  );
};

export default Skills;
