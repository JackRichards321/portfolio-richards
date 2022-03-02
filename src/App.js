import React from 'react';
import NavBar from './NavBar.js';
import ProjectList from './ProjectList.js';
import Contact from './Contact.js';
import RCV from './RCV.js';
import CreatureLab from './CreatureLab';
import SpudClicker from './SpudClicker.js';
import About from "./About.js"
import AboutLanding from './AboutLanding.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';

const Landing = () => {
  return (
    <div className="homePage">
      <AboutLanding />
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
        <Route path='/project-creature' element={<CreatureLab />} />
        <Route path='/project-spud' element={<SpudClicker />} />
      </Routes>
    </Router>
  );
}

export default App;
