import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import './about.css';

import brian from '../../images/brianD.jpg';

const About = () => (
  <section id="about">
    <div className="about">
      <Grid>
        <Row className="row-eq-height">
          <Col className="portrait" sm={6}>
            <Image src={brian} circle responsive />
          </Col>
          <Col className="facts" sm={6}>
            <h1>
          A little
              <span className="highlight"> about</span>
              {' '}
          me
            </h1>
            <hr />
            <h3>I'm a web & mobile front-end developer based in Austin, TX</h3>
            <p>
          I specialize in React & React Native.
              <br />
          I was born in California but grew up in Texas.
              <br />
          I enjoy lifting weights, cooking, and listening to music.
              <br />
          I don't like sweets.
              <br />
          I always carry my water bottle around with me.
              <br />
          I love traveling and the feeling of culture shock.
              <br />
          I have been to 14 states and 3 countries.
              <br />
          I worked at a pharmacy for 2 years during college.
              <br />
          I graduated with a B.S.A. in Biochemistry at the University of Texas at Austin.
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  </section>
);

export default About;
