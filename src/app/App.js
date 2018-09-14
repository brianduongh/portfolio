import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavigationBar from '../components/navigation';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
