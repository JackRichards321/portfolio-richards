import React from 'react';
import ProjectList from './ProjectList.js';
//import {  Link } from "react-router-dom";

const SpudClicker = () => {
    return (
        <div className="project-spud">
        <div className="spudDiv">
            <div id="spud1" className="splitDiv">
                <p className="blurb">This was my final project for a mobile app development class. I based this app off of the popular web game "Cookie Clicker", but built in XAML Forms for Android.</p>
                <img src="/spud-1.png" alt="spudClicker" className="spudImage"></img>
            </div>
            <div id="spud2" className="splitDiv">
                <img src="/spud-2.png" alt="spudClicker" className="spudImageBottom"></img>
                <p className="blurb">This is my first full mobile app, and I built it from scratch. I worked closely with my professor to get it polished, and it is now a fully functioning app where users can purchase upgrades, collect spuds and share their progress to social media.</p>
            </div>

            
        </div>
        <ProjectList></ProjectList>
        </div>
    )
}

export default SpudClicker;