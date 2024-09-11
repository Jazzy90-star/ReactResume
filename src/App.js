import React from 'react';
import NavBar from './navbar';
import './App.css';
import Skills from './skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './HireMe';
import AboutMe from './Aboutme';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className="App-main">
        
        <AboutMe/>
        <br></br>
        <Education/>
        <br></br>
        <Skills/>
        <br></br>
        <Projects/>
        <br></br>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
