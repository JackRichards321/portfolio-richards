import React from 'react'

const About = () => {
    return (
        <div className="aboutDiv">
            <div className="aboutL">
                <div className="aboutLTop">
                    <h1>Hi! I'm</h1>
                    <h1 className="redH1">Jack Richards</h1>
                    <p>I am an RIT student <br></br>studying New Media Interactive Development</p>
                </div>
                <div className="aboutLBot">
                    <ol><h2>Skills:</h2>
                    <li>Front-End Development</li>
                    <li>UI/UX</li>
                    <li>Web and Mobile Design</li>
                    </ol>
                </div>
            </div>

            <div className="aboutR">
                <img src="/jack.jpg" alt="jack richards" className="jackPic"></img>
            </div>
        </div>
    );
}

export default About;