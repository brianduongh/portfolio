import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './navigation.css';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="/">
          Home
        </NavItem>
        <NavItem href="/about">
          About
        </NavItem>
        <NavItem href="/skills">
          Skills
        </NavItem>
        <NavItem href="/projects">
          Projects
        </NavItem>
        <NavItem href="/contact">
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
