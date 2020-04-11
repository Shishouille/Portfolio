// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'src/components/Layout';
import Bio from 'src/components/Pages/Bio';
import Contact from 'src/components/Pages/Contact';
import Projects from 'src/components/Pages/Projects';
import Skills from 'src/components/Pages/Skills';

import StyledApp from './StyledApp';

// == Composant
const App = () => (
  <StyledApp>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Bio />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects /> 
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  </StyledApp>
);

// == Export
export default App;
