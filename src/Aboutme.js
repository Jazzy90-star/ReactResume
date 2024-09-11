import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './App.css';

function AboutMe() {
  return (
    <>
    <div className="box">
      <Container className="d-flex flex-column align-items-center">
        <Image src='/professional.jpg' rounded thumbnail style={{ width: '300px', height: '300px' }} />
      <p>Hello, my name is Jaselynn Milliron. As a motivated and enthusiastic individual, I'm excited to start my career in front-end development. Although I'm new to the industry, 
        I've developed a solid foundation in HTML, CSS, JavaScript and React through online courses and personal projects. I have also continued to expand my knowledge through Udemy Courses and the Promineo Tech back-end course.
        I'm eager to apply my skills, learn from experienced professionals, and contribute to innovative projects.
        </p></Container></div>
    </>
  );
}

export default AboutMe;