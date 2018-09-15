import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './navigation.css';

const NavigationBar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Link activeClass="active" to="home" spy smooth offset={-50} duration={500}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy smooth offset={-50} duration={500}>
          About
        </Link>
        <Link activeClass="active" to="skills" spy smooth offset={-50} duration={500}>
          Skills
        </Link>
        <Link activeClass="active" to="projects" spy smooth offset={-50} duration={500}>
          Projects
        </Link>
        <Link activeClass="active" to="contact" spy smooth offset={-50} duration={500}>
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
