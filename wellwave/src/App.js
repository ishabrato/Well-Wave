import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Superadmin from './Pages/Superadmin';
import User from './Pages/User';
import Usersign from './Pages/Usersign';
function App() {
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
        <Dropdown.Item ><Link to="/nav"> Navbar</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Nav.Link>
            
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/sadmin' element={<Superadmin/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path='/signUser' element={<Usersign/>}/>
  <Route path= '/nav' element={<Nav/>}/>
 
</Routes>



    </div>
  );
}

export default App;
