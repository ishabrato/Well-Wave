import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import './Login.css';
function Usersign () {
  return (
    <div className='field'>
    <div className='new'>
    
  <Form className='mb-3 col-auto form-group'>
    <h2 className='heading1'>Log In</h2>
<div className='firstName' >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter  your First  Name" />
    </Form.Group>
</div>

<div className='middlename' >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your middle Name" />
    </Form.Group>
</div>


<div className='lastname' >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your Last  Name" />
    </Form.Group>
</div>


<div className='dob'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>DOB</Form.Label>
      <Form.Control type="date" placeholder="Enter your Date of Birth" />
    </Form.Group>
    
</div>


<div className='age'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter your Date of Birth" disabled/>
    </Form.Group>
    
</div>
    
<div className='email'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter your valid email" />
    </Form.Group>
    
</div>

<div className='secondheading'>
    <h2>Address Details</h2>
</div>
<div className='address'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Address" />
    </Form.Group>
    
</div>

<div className='address'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="State" />
    </Form.Group>
    
</div>



<div className='city'>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="City" />
    </Form.Group>
</div>


<div className='zip'>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Zip</Form.Label>
      <Form.Control type="text" placeholder="zip" />
    </Form.Group>
</div>


<div>
    <h1>ID details</h1>


    <div className='adhaar'>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Adhaar Id</Form.Label>
      <Form.Control type="number" placeholder="Enter your adhaar card number" />
    </Form.Group>
</div>


<div className='pan'>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Pan Id</Form.Label>
      <Form.Control type="number" placeholder="Enter your pan id" />
    </Form.Group>
</div>

<div className='voter'>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Voter Id</Form.Label>
      <Form.Control type="number" placeholder="Enter your voter id" />
    </Form.Group>
</div>

</div>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <h6 className='label1'>Don't have an account?Create your account
     
      <Link to = 'signUser'>Sign up</Link> 
    

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

export default Usersign
