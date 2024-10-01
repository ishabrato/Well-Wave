import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar(){
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand font-italic title text-success fw-semibold'>
          Well WAVE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto justify-content-end w-100 d-flex'>
          <Nav.Link href='/' className='active-text-uppercase'>Home</Nav.Link>
          <Nav.Link href='/about' className='active-text-uppercase'>About</Nav.Link>
          <Nav.Link href='/login' className='active-text-uppercase'>Login</Nav.Link>
          <Nav.Link href='/register' className='active-text-uppercase'>
            Register
          </Nav.Link>         
        </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
