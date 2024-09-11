import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

function Skills() {
  return (
    <>
     <div className="box">
 <Container className="d-flex flex-column align-items-center">
     <h3>Skills</h3>
    <section className="skills-section">
      <div className="skills-container">
        <div className="skill-category">
          <h4>Programming Languages</h4>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Development Frameworks</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React Bootstrap</li>
            
          </ul>
        </div>
        <div className="skill-category">
          <h4>Databases</h4>
          <ul>
           
            <li>MySQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
</Container>
</div>
    </>
  );
}

export default Skills;