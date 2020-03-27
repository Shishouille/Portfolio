// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Layout from 'src/components';
import {
  Layout,
  Bio,
  Skills,
  Projects,
  Contact,
} from 'src/components';


// == Composant
const App = () => (
  <div className="app">
    <Layout>
      <h1>Hello App</h1>
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
  </div>
);

// == Export
export default App;
