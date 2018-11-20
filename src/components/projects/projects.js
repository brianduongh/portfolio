import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import './projects.css';

import Luxuvity from '../../images/Luxuvity.jpg';
import PokeLogo from '../../images/PokeLogo.png';
import LuxuvityWeb from '../../images/WebExample.png';
import LuxuvityMobile from '../../images/mobileExample.png';
import Grounds from '../../images/grounds.png';
import Longhorn from '../../images/longhorn.png';

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  pokeGithub() {
    window.open('https://github.com/brianduongh/pokeApp');
  }

  openGrounds() {
    window.open('https://github.com/brianduongh/Project_1')
  }

  openTrivia() {
    window.open('https://github.com/brianduongh/TriviaGame')
  }

  openRPG() {
    window.open('https://github.com/brianduongh/unit-game-4')
  }

  openGuess() {
    window.open('https://github.com/brianduongh/Word-Guess-Game')
  }

  openGifs() {
    window.open('https://github.com/brianduongh/Giftastic')
  }

  render() {
    const { show } = this.state;
    return (
      <section id="projects">
        <div className="projects">
          <Grid>
            <Row className="fade-in">
              <h1>
      Few of my
                <span className="highlight"> projects</span>
              </h1>
              <hr />
            </Row>
            <Row className="luxuvityProject">
              <Col md={4}>
                <Image src={Luxuvity} responsive />
              </Col>
              <Col md={8}>
                <h3>Luxuvity</h3>
                <h4>Front-End Web/Mobile Developer</h4>
              At Luxuvity, I worked under the supervision of a lead software engineer to develop a property management software which used Firebase as the database and React/React Native for the frontend. During my time here, I learned how to work alongside other developers, using tools such as GitHub and Trello for project management.
                <br />
                <Button onClick={this.handleShow}>Screenshots</Button>
                <Modal show={show} onHide={this.handleClose} className="screenshots">
                  <Modal.Header closeButton>
                    <Image src={LuxuvityWeb} responsive />
                    <Image src={LuxuvityMobile} responsive />
                  </Modal.Header>
                  <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
            <hr />
            <Row className="pokeProject">
              <Col md={8}>
                <h3>Tim's Poke</h3>
                <h4>React Native Application</h4>
              I created this as a simple project to show my friend how his mobile application could look like if he decides to open up a Poke restaruant. NativeBase was used for the static UI components while React Navigation provided routing and navigation.
                <br />
                <Button onClick={this.pokeGithub}>GitHub</Button>
              </Col>
              <Col md={4}>
                <Image className="pokeGithub" src={PokeLogo} responsive />
              </Col>
            </Row>
            <Row className="luxuvityProject">
              <Col md={4}>
                <Image src={Grounds} responsive />
              </Col>
              <Col md={8}>
                <h3>Grounds</h3>
                <h4>Front-End Dev/Project Manager</h4>
Mobile responsive web application built to provide a platform that connects local businesses & restaurants looking to get rid of their coffee grounds and people looking to recycle and fertalize those grounds.                 <br />
                <Button onClick={this.openGrounds}>GitHub</Button>
              </Col>
            </Row>
            <Row className="pokeProject">
              <Col md={8}>
                <h3>UT Bootcamp Projects</h3>
                <h4>JavaScript/Jquery games</h4>
                  These are a few games I built at UT's Full-Stack bootcamp. These games show utilization of jQuery, Javascript, HTML, APIs, and CSS.
                <br />
                <Button onClick={this.openTrivia}>Trivia</Button>
                <Button onClick={this.openGuess}>Hangman</Button>
                <Button onClick={this.openRPG}>Pokemon RPG</Button>
                <Button onClick={this.openGifs}>Gif Generator</Button>
              </Col>
              <Col md={4}>
                <Image className="pokeGithub" src={Longhorn} responsive />
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Projects;
