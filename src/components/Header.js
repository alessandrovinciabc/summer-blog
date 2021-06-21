import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
  return (
    <Navbar className={props.className + ''} variant="dark" expand="md">
      <Navbar.Brand href="#/home">
        <h1>☀⛱Blog</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="header-navbar" />
      <Navbar.Collapse id="header-navbar">
        <Nav className="ml-auto">
          <Nav.Link className="text-light" href="#/home">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="#/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
