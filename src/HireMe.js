import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import './App.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="box">
    <Container className="d-flex flex-column align-items-center">
      <h3>Hire Me</h3>
      <Container className="d-flex flex-column align-items-center">
        {/* contact information */}
    <h5>Contact Information</h5>
<p>Jaselynn Milliron</p>
<p>Phone Number: 509-306-1436</p>
<p>Email: Jaselynn.jessica@gmail.com</p>
<p>GitHub Repository: https://github.com/Jazzy90-star</p>
<br></br>
<p><b>Or Send Me A Message</b></p>
</Container>

{/* Form box */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '500px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '500px' }}
          />
          <Form.Text className="text-muted">
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <InputGroup>
          <InputGroup.Text>Message</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '500px' }}
          />
        </InputGroup>
        <br></br>

        <Button variant="primary" type="submit" style={{ width: '200px' }}>
          Submit
        </Button>
        {submitted && (
          <p>Thank you for contacting me! I'll respond soon.</p>
        )}
      </Form>
    </Container></div>
  );
}

export default Contact;