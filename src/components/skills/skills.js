import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './skills.css';

const Skills = () => (
  <section id="skills">
    <div className="skills">
      <Grid>
        <Row className="fade-down">
          <h1>
Some of my sweet
            <span className="highlight"> skills</span>
          </h1>
          <hr />
        </Row>
        <Row className="skills-list">
          <Col sm={4}>
            <ul className="fade-left">
              <li>HTML5</li>
              <li>CSS3/Sass</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Git/GitHub</li>
            </ul>
          </Col>
          <Col sm={4}>
            <ul className="fade-up">
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>Xcode</li>
            </ul>
          </Col>
          <Col sm={4}>
            <ul className="fade-right">
              <li>Responsive Web Design</li>
              <li>Adobe Photoshop</li>
              <li>Microsoft Office Suite</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  </section>
);

export default Skills;
