import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import User from './Pages/User';
import Usersign from './Pages/Usersign';
import Footer from './Pages/register_login/Footer';
import NavBar from './Pages/Nav';
function App() {
  return (
  <>
    <div>
      <div className='navbar'>
        <NavBar></NavBar>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<User/>}/>
        <Route path='/register' element={<Usersign/>}/>
      
      </Routes>



    </div>
    <Footer></Footer>
  </>
  );
}

export default App;
