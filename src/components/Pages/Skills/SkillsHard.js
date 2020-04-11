import React from 'react';

import babel from 'src/assets/images/icons/babel.svg';
import css from 'src/assets/images/icons/css.svg';
import js from 'src/assets/images/icons/js.svg';
import mysql from 'src/assets/images/icons/mysql.svg';
import php from 'src/assets/images/icons/php.svg';
import react from 'src/assets/images/icons/react.svg';
import slack from 'src/assets/images/icons/slack.svg';
import trello from 'src/assets/images/icons/trello.svg';
import vsc from 'src/assets/images/icons/vsc.svg';
import github from 'src/assets/images/icons/githubskills.svg';
import git from 'src/assets/images/icons/git.svg';
import redux from 'src/assets/images/icons/redux.svg';
import axios from 'src/assets/images/icons/axios.svg';
import html from 'src/assets/images/icons/html.svg';
import webpack from 'src/assets/images/icons/webpack.svg';
import npm from 'src/assets/images/icons/npm.svg';
import nodejs from 'src/assets/images/icons/nodejs.svg';
import mongodb from 'src/assets/images/icons/mongodb.svg';
import yarn from 'src/assets/images/icons/yarn.svg';
import styled from 'src/assets/images/icons/styled.svg';
import reactRouter from 'src/assets/images/icons/reactRouter.svg';
import insomnia from 'src/assets/images/icons/insomnia.svg';
import office from 'src/assets/images/icons/office.svg';
import clipboard from 'src/assets/images/icons/clipboard.svg';
import graph from 'src/assets/images/icons/graph.svg';
import azure from 'src/assets/images/icons/azure.svg';
import jquery from 'src/assets/images/icons/jquery.svg';
import linux from 'src/assets/images/icons/linux.svg';
import tailwind from 'src/assets/images/icons/tailwind.svg';
import nextjs from 'src/assets/images/icons/nextjs.svg';


const SkillsHard = () => (
  <div className="skills-content">
    <article className="skills-container">
      <h3 className="skills-title subtitle">Front-end</h3>
      <section className="skills-package">
        <h4 className="skills-name">The ultimate combo</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={react} alt="ReactJS" />
            <legend>ReactJS</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={redux} alt="Redux" />
            <legend>Redux / React-Redux</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={axios} alt="Axios" />
            <legend>Axios</legend>
          </div>
        </div>
      </section>
      <section className="skills-package">
        <h4 className="skills-name">The Must-Have</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={html} alt="HTML" />
            <legend>HTML 5</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={css} alt="CSS" />
            <legend>CSS 3</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={js} alt="Javascript" />
            <legend>Javascript</legend>
          </div>
        </div>
      </section>
      <section className="skills-package">
        <h4 className="skills-name">Packages Manager</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={npm} alt="NPM" />
            <legend>NPM</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={yarn} alt="Yarn" />
            <legend>Yarn</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={webpack} alt="WebPack" />
            <legend>Webpack</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={babel} alt="Babel" />
            <legend>Babel</legend>
          </div>
        </div>
      </section>
      <section className="skills-package">
        <h4 className="skills-name">Fullstack framework</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={nextjs} alt="NextJS" />
            <legend>NextJS</legend>
          </div>
        </div>
      </section>
      <section className="skills-package">
        <h4 className="skills-name">The bonuses</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={styled} alt="Styled-Components" />
            <legend>Styled-Components</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={tailwind} alt="TailwindCSS" />
            <legend>Tailwind CSS</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={reactRouter} alt="React-Router" />
            <legend>React-Router</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={jquery} alt="jQuery" />
            <legend>jQuery</legend>
          </div>
        </div>
      </section>
    </article>
    <article className="skills-container">
      <h3 className="skills-title subtitle">Back-End</h3>
      <section className="skills-package">
        <h4 className="skills-name">A database to rule them all</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={php} alt="PHP" />
            <legend>PHP 7</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={mysql} alt="mySQL" />
            <legend>MySQL</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={insomnia} alt="Insomnia" />
            <legend>Insomnia</legend>
          </div>
        </div>
      </section>
    </article>
    <article className="skills-container">
      <h3 className="skills-title subtitle">Teamwork</h3>
      <section className="skills-package">
        <h4 className="skills-name">I code on</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={vsc} alt="VSC" />
            <legend>VSC with Liveshare</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={linux} alt="Linux" />
            <legend>Linux</legend>
          </div>
        </div>
      </section>
      <section className="skills-package">
        <h4 className="skills-name">Project makers</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={git} alt="Git" />
            <legend>Git</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={github} alt="Github" />
            <legend>GitHub</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={slack} alt="Slack" />
            <legend>Slack</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={trello} alt="Trello" />
            <legend>Trello</legend>
          </div>
        </div>
      </section>
    </article>
    <article className="skills-container">
      <h3 className="skills-title subtitle">Miscellaneous</h3>
      <section className="skills-package">
        <h4 className="skills-name">Office Skills</h4>
        <div className="skills-sub">
          <div className="skills-setup">
            <img className="skills-icon" src={office} alt="Pack Office" />
            <legend>Pack Office</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={clipboard} alt="Standardized Questionnaries" />
            <legend>Standardized Questionnaries</legend>
          </div>
          <div className="skills-setup">
            <img className="skills-icon" src={graph} alt="Statistica" />
            <legend>Statistica</legend>
          </div>
        </div>
      </section>
    </article>
    <article className="skills-container">
      <h3 className="skills-title subtitle">For Next...</h3>
      <section className="skills-sub skills-package disabled">
        <div className="skills-setup">
          <img className="skills-icon" src={nodejs} alt="NodeJS" />
          <legend>NodeJS</legend>
        </div>
        <div className="skills-setup">
          <img className="skills-icon" src={mongodb} alt="MongoDB" />
          <legend>MongoDB</legend>
        </div>
        <div className="skills-setup">
          <img className="skills-icon" src={azure} alt="Azure" />
          <legend>Azure</legend>
        </div>
      </section>
    </article>
  </div>
);

export default SkillsHard;
