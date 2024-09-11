import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import './App.css';

function Education() {
  return (
    <div className="box">
    <Container className="d-flex flex-column align-items-center">
      <h3 className="my-4">Education</h3>
      <Stack gap={6}>
{/* Promineo Tech information */}
      <Row className="d-flex align-items-center">
          <Col md={4} className="text-center">
           <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBU8hWdSIgvk4TKjYSRb_nkV8wT0tgk9mNQ&s"
            rounded 
              style={{ width: '200px', height: '200px' }} 
              />
          </Col>
          <Col md={8}>
            <h5>Promineo Tech</h5> 
            <p>
            Completed comprehensive front-end development course, mastering HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, responsive design, UI/UX principles, Git, and modern build tools. Skilled in designing and building responsive, user-friendly web applications.
            </p>
          </Col>
        </Row>
{/* Scrum Alliance information */}
        <Row className="d-flex align-items-center">
          <Col md={4} className="text-center">
            <Image 
              src="https://images.squarespace-cdn.com/content/v1/53252e4ce4b026a30a70a340/1722459525911-JC4308A8RG7R5JXDEHVV/CSM%402x.png?format=1000w" 
              rounded 
              style={{ width: '200px', height: '200px' }} 
            />
          </Col>
          <Col md={8}>
            <h5>Scrum Alliance</h5>
            <p>
              I hold a Certified Scrum Master (CSM) certification from Scrum Alliance, demonstrating my expertise in the Scrum framework and agile principles. 
              With this certification, I've proven my ability to facilitate Scrum teams, iterative development, and continuous improvement. 
              I'm skilled in Scrum values, roles, and ceremonies, as well as agile project planning and management, team collaboration and coaching, 
              and iterative development and delivery. 
              I'm committed to delivering high-quality products and services through agile practices, and I'm dedicated to helping teams succeed using Scrum and agile methodologies.
            </p>
          </Col>
        </Row>
{/* CWU infomation */}
        <Row className="d-flex align-items-center">
          <Col md={4} className="text-center">
           <Image src="https://cdn.britannica.com/67/153867-050-0595AF4C/Barge-Hall-Central-Washington-University-Ellensburg.jpg?w=400&h=300&c=crop"
            rounded 
              style={{ width: '200px', height: '200px' }} 
              />
          </Col>
          <Col md={8}>
            <h5>Central Washington University</h5> 
            <p>
              Compassionate and detail-oriented Family Studies professional with a Bachelor's degree and a strong focus on effective 
              communication strategies for families, couples, and individuals. 
              Skilled in understanding family dynamics, conflict resolution, and relationship building. 
              Proficient in applying theoretical knowledge to real-world settings, with a passion for supporting healthy family relationships and communication.
            </p>
          </Col>
        </Row>
    
      </Stack>
    </Container> </div>
  );
}

export default Education;