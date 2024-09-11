import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NavBar() {
  return (
    <>
     <Container fluid>
        <Row>
        <h1>React Portfolio</h1>
            <Col>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="AboutMe">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="education">Eduction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="skill">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact">Hire Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         
        </Nav.Item>
      </Nav></Col></Row></Container>
    </>
  );
}

export default NavBar;