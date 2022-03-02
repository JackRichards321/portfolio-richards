import React from 'react';
import ProjectList from './ProjectList.js';
//import {  Link } from "react-router-dom";

const SpudClicker = () => {
    return (
        <div className="project-spud">
        <div className="spudDiv">
            <div idName="spud1" className="splitDiv">
                <p className="blurb">This was the project to prepare me for my senior Capstone project. Myself and a team of 8 of my peers created an information campaign, an animated presentation, and a working, interactive, electronic ballot for NYC's switch to ranked choice voting.</p>
                <img src="/spud-1.png" alt="spudClicker" className="spudImage"></img>
            </div>
            <div idName="spud2" className="splitDiv">
                <img src="/spud-2.png" alt="spudClicker" className="spudImageBottom"></img>
                <p className="blurb">I worked as the Tech Lead on my team. My general development responsibilities included creating many of the extra screens for the ballot. I worked closely with our UI designers to make sure we were coding their vision perfectly. Additionally, I oversaw the entire developer team, organized meetings and coordinated with the project manager.</p>
            </div>

            
        </div>
        <ProjectList></ProjectList>
        </div>
    )
}

export default SpudClicker;