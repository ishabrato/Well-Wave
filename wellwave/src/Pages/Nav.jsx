import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css';
function Nav(){
  return (
    <div>
            <div className='navbar'>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
            Well WAVE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-end w-100'>
            <Nav.Link href='/' className='active-text-uppercase'>Home</Nav.Link>
            <Nav.Link href='/about' className='active-text-uppercase'>About</Nav.Link>
            <Nav.Link > <Dropdown>
      <Dropdown.Toggle >
        Log in 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/sadmin">Super Admin</Link></Dropdown.Item>
        
        <Dropdown.Item ><Link to="/admin"> Admin</Link></Dropdown.Item>

        <Dropdown.Item ><Link to="/user"> User</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Nav.Link>
            
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>

    </div>
  )
}

export default Nav
