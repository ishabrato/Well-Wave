import React from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import './Login.css';

function Superadmin(){
    return(
      <section >
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
<div className='email'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
       
        Sign up
      

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
    </div></section>
    )
}

export default Superadmin;
