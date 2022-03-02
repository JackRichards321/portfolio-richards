import React from 'react';
import ProjectList from './ProjectList.js';
//import {  Link } from "react-router-dom";

const CreatureLab = () => {
    return (
        <div className="project-creature">
        <div className="creatureDiv">
            <div id="creature1" className="splitDiv">
                <p className="blurb">This is my Senior Capstone project. I am currently working with a team of 2 other developers and 5 New Media Design students on a collaborative drawing experience built for Imagine RIT.</p>
                <img src="/creature-1.png" alt="CreatureLab" className="creatureImage"></img>
            </div>
            <div id="creature2" className="splitDiv">
                <img src="/creature-2.png" alt="CreatureLab" className="creatureImage"></img>
                <p className="blurb">My general development responsibilities include line smoothing on the drawing app, and the gallery page. The gallery page will be a dynamically loading grid of images from our database</p>
            </div>
            <div id="creature3" className="splitDiv">
                <p className="blurb">A roadblock we have faced so far in this project is developing for the touch screen tablets that Imagine RIT goers will use, instead of typical mouse events. We have also had to think about the physical displaying of this project, people will be waiting in line and viewing our gallery on a large screen from far away.</p>
                <img src="/creature-3.png" alt="CreatureLab" className="creatureImage"></img>
            </div>
            
        </div>
        <ProjectList></ProjectList>
        </div>
    )
}

export default CreatureLab;