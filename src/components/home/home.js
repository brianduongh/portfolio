import React from 'react';
import './home.css';

const Home = () => (
  <section id="home">
    <div className="stars" />
    <div className="stars2" />
    <div className="stars3" />
    <div className="home">
      <div className="intro">
        Hi, I'm
        <span className="highlight"> Brian Duong</span>
        .
        <br />
        I'm a front-end developer.
      </div>
      <div className="icons">
        <a href="https://github.com/brianduongh">
          <i className="fab fa-github github" />
        </a>
        <a href="https://www.linkedin.com/in/brian-duong-028353148/">
          <i className="fab fa-linkedin-in linkedin" />
        </a>
      </div>
    </div>
  </section>
);

export default Home;
