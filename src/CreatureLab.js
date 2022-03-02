import React from 'react';
import ProjectList from './ProjectList.js';
//import {  Link } from "react-router-dom";

const CreatureLab = () => {
    return (
        <div className="project-creature">
        <div className="creatureDiv">
            <div idName="creature1" className="splitDiv">
                <p className="blurb">This was the project to prepare me for my senior Capstone project. Myself and a team of 8 of my peers created an information campaign, an animated presentation, and a working, interactive, electronic ballot for NYC's switch to ranked choice voting.</p>
                <img src="/creature-1.png" alt="CreatureLab" className="creatureImage"></img>
            </div>
            <div idName="creature2" className="splitDiv">
                <img src="/creature-2.png" alt="CreatureLab" className="creatureImage"></img>
                <p className="blurb">I worked as the Tech Lead on my team. My general development responsibilities included creating many of the extra screens for the ballot. I worked closely with our UI designers to make sure we were coding their vision perfectly. Additionally, I oversaw the entire developer team, organized meetings and coordinated with the project manager.</p>
            </div>
            <div idName="creature3" className="splitDiv">
                <p className="blurb">One hurdle I faced during this project was breaking three of the fingers on my left hand. I had to pivot away from the heavy coding and take a more organizational role. In all honesty, I enjoyed doing more managing than just typing. I also took the lead on the styling of the screens. I made sure all fonts, weights, and colors were perfect.</p>
                <img src="/creature-3.png" alt="CreatureLab" className="creatureImage"></img>
            </div>
            
        </div>
        <ProjectList></ProjectList>
        </div>
    )
}

export default CreatureLab;