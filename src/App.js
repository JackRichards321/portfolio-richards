import React from 'react';
import NavBar from './NavBar.js';
import ProjectList from './ProjectList.js';
import Contact from './Contact.js';
import RCV from './RCV.js';
import AudioViz from './AudioViz';
import ToT from './ToT.js';
import About from "./about.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';

const Landing = () => {
  return (
    <div>
      <About />
      <ProjectList />
    </div>
  );
}

function App() {
  //const [projects, setProjects] = useState([{ id: 1, name: 'Proj 1' }]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/project-list' element={<ProjectList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project-rcv' element={<RCV />} />
        <Route path='/project-audio' element={<AudioViz />} />
        <Route path='/project-tot' element={<ToT />} />
      </Routes>
    </Router>
  );
}

export default App;
