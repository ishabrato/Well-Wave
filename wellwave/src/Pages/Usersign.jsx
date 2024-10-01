import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import './main.css';

function Usersign () {
  return (
  <div className='field'>
    <div className='new'>
      <Form className='mb-3 col-auto form-group'>
        <h2 className='heading1'>REGISTER AS PATIENT/GUARDIAN</h2>
        <hr></hr>
        <div className='row' >
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" required/>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" placeholder="Middle Name" />
            </Form.Group>
          </div>
          <div className='col-md-4' >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" required/>
            </Form.Group>
          </div>
        </div>


        <div className='row'>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>DOB</Form.Label>
              <Form.Control type="date" required/>
            </Form.Group>
          </div>
          <div className='col-md-8'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required/>
            </Form.Group>
          </div>
        </div>
        
        

        <div className='row'>
          <div className="col-md-12">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address Line</Form.Label>
              <textarea className='form-control' rows={3} placeholder="Address Line" required></textarea>
            </Form.Group>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
            </Form.Group>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-2">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="zip" required/>
            </Form.Group>
          </div>
          <div className="col-md-5">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adhaar Id</Form.Label>
              <Form.Control type="number" placeholder="ADHAR NUMBER"/>
            </Form.Group>
          </div>
          <div className="col-md-5">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pan Id</Form.Label>
              <Form.Control type="number" placeholder="PAN-ID" />
            </Form.Group>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Voter Id</Form.Label>
              <Form.Control type="number" placeholder="VOTER-ID" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Citizen Type</Form.Label>
              <select className='form-control'>
                <option>---SELECT---</option>
                <option>INDIAN</option>
                <option>OTHERS</option>
              </select>
            </Form.Group>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm-Password'/>
            </Form.Group>
          </div>
        </div>

          <h6 className='label1'>Already have an account ? &nbsp;
            <Link to = '/login'>Log-In</Link> 
          </h6>           
                              
          <Button className='btn1'  type="submit">
            Submit
          </Button>
        
      </Form>
    </div>
  </div>
  );
}

export default Usersign
