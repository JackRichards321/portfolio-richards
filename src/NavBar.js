import React from 'react';
import { Link } from "react-router-dom";
import Pdf from './Documents/resume.pdf';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbarL">
                <li key="left1" className="liL contactNav">
                    <Link to="/contact">Contact</Link>
                </li>
                <li key="left2" className="liL">
                    <Link to="/about">About</Link>
                </li>
                <li key="left3" className="liL">
                    <Link to="/project-list">Projects</Link>
                </li>
            </div>
            <div className="navbarC">
                <li key="center1" className="liC">
                <Link to="/">Home</Link>
                </li>
            </div>
            <div className="navbarR">
                <li key="right1" className="liR">
                    <a href={Pdf} target="_blank" rel="noreferrer">Resume</a>
                </li>
                <li key="right2" className="liR">
                    <a href="https://www.linkedin.com/in/jack-richards-aa97751a3/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="LinkedIn" width="30px"></img></a>
                </li>
            </div>
        </div>
    )
}

export default NavBar;