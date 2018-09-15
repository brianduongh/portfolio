import React from 'react';

import NavigationBar from '../components/navigation';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';

const App = () => (
  <div className="app">
    <NavigationBar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
