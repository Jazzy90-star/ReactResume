import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';



function Projects() {
  return (
    <>
     <div className="box">
    <Container>
      <Row>
    <h3>Projects</h3>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Dq3eDrQqEgnn9BlZaj18alDtfwKOb1awAw&s" />
      <Card.Body>
        <Card.Title>Learn Japanese</Card.Title>
        <Card.Text>
        A comprehensive repository of resources and materials to help you learn Japanese effectively. Whether you're a beginner or looking to advance your skills, this repository has everything you need to master the Japanese language.
        </Card.Text>
        <Button variant="primary">Go To Repository</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f3JmM7qvCCCuUUaNJsIuciM8VwDADw88f9GeB8IIWR9cZ04T7GfxCdlo5mqc-bvD8VM&usqp=CAU" />
      <Card.Body>
        <Card.Title>Movies</Card.Title>
        <Card.Text>
        A website for browsing and discovering movies. This project uses React for the front end and integrates with a movie API to fetch movie data.
        </Card.Text>
        <Button variant="primary">Go To Repository</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3w-KbsjA7yNn4Etz0iCWv3N_1BjcmljowQ&s" />
      <Card.Body>
        <Card.Title>Bibliophile</Card.Title>
        <Card.Text>
        Bibliophile is a web application for book lovers to discover, review, and share their favorite books with others. It is built using JavaScript , HTML and CSS.
        </Card.Text>
        <Button variant="primary">Go To Repository</Button>
      </Card.Body>
      </Card>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2AsMWzcounX-_DFaPhf0e1S6gzzCFCMZsA&s" />
      <Card.Body>
        <Card.Title>Mario Brothers</Card.Title>
        <Card.Text>
        Welcome to the Mario Brothers website, a vibrant and playful tribute to the iconic gaming duo.
        </Card.Text>
        <Button variant="primary">Go To Repository</Button>
      </Card.Body>

    </Card>
    </Row>
    </Container></div>
    </>
  );
}

export default Projects;