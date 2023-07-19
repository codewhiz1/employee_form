import React, { useState } from "react";
import { Button , Alert , Breadcrumb } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as Formik from 'formik';
import * as yup from 'yup';

export const Login = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    // const {currentForm, setCurrentForm} = useState('login');
  
    // const toggleForm = (formName) => {
    //   setCurrentForm(formName);
    // }
  
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        
        <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        <Breadcrumb.Item>Test 4</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </>
    );
  }


// export const Login = (props) => {
//     const {email, setEmail} = useState('');
//     const {pass, setPasss} = useState('');


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email"/>
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPasss(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
//             <button type="submit">Log In</button>
//         </form>
//         <button onClick={props.onFormSwitch}>Don't have an account ? Register Here</button>
//         </>
//     )
// }