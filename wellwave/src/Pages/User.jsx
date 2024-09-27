import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import './Login.css';

function User(){
    return(
        <div className='field'>
        <div className='new'>
        
      <Form className='mb-3 col-auto form-group'>
        <h2 className='heading1'>Log In</h2>
  <div className='user' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="Enter User Name" />
        </Form.Group>
  </div>
  
  <div className='password'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
  </div>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <h6 className='label1'>Don't have an account?Create your account
         
          <Link to = '/signUser'>Sign up</Link> 
        
  
       </h6>
        </Form.Group>
       
        {/* <Button className='col-l-6 d-flex justify-content-center d-none d-lg-flex' variant="primary" type="submit">
          SignUp
        </Button> */}
         
                               
                               
        <Button className='btn1'  type="submit">
          Submit
        </Button>
        
      </Form>
      </div>
      </div>
    )
}

export default User;
