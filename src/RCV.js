import React from 'react';
//import {  Link } from "react-router-dom";

const RCV = () => {
    return (
        <div className="rcvDiv">
            <div idName="rcv1" className="splitDiv">
                <p className="blurb">This was the project to prepare me for my senior Capstone project. Myself and a team of 8 of my peers created an information campaign, an animated presentation, and a working, interactive, electronic ballot for NYC's switch to ranked choice voting.</p>
                <img src="/ballot-1.png" alt="ballot" width='300px' className="rcvImage"></img>
            </div>
            <div idName="rcv2" className="splitDiv">
                <img src="/ballot-2.png" alt="ballot" width='300px' className="rcvImage"></img>
                <p className="blurb">I worked as the Tech Lead on my team. My general development responsibilities included creating many of the extra screens for the ballot. I worked closely with our UI designers to make sure we were coding their vision perfectly. Additionally, I oversaw the entire developer team, organized meetings and coordinated with the project manager.</p>
            </div>
            <div idName="rcv3" className="splitDiv">
                <p className="blurb">One hurdle I faced during this project was breaking three of the fingers on my left hand. I had to pivot away from the heavy coding and take a more organizational role. In all honesty, I enjoyed doing more managing thann just typing. I also took the lead on the styling of the screens. I made sure all fonts, weights, and colors were perfect.</p>
                <img src="/ballot-3.png" alt="ballot" width='300px' className="rcvImage"></img>
            </div>
            <div idName="rcv4" className="splitDiv">
                <img src="/ballot-5.png" alt="ballot" width='400px' className="rcvImage"></img>
                <p className="blurb">This project involved a lot of coordination with the other two main deliverables and the teams working on them, and I learned how to better work with a team.</p>
            </div>
        </div>
    )
}

export default RCV;