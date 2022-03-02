import React from 'react'

const About = () => {
    return (
        <div className="aboutDiv">
            <div className="aboutDivTop">
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
            <div className="aboutDivMid">
                <p className="mission">Seeking summer and fall 2022 co-op internship positions with a focus on front-end development.</p>
            </div>
            <div className="aboutDivBot">
                <div className="homeDiv">
                    <p className="homeP">I was born and raised in Rochester, New York. I have lived all around the city and it has shaped me into the person I am today. My pragmatic views, sense of humor, and love for garbage plates all come from the people and places in Rochester. Currently, I live with some of my best friends and teammates near RIT where we work out together, play together, and learn together.</p>
                    <img src="rochacha.jpg" alt="Rochester, NY"></img>
                </div>
                <div className="frisbeeDiv">
                    <img src="spuds.jpg" alt="The RIT Spudheds"></img>
                    <p className="frisbeeP">When I am not working on my schoolwork, you can probably find me with my ultimate frisbee teammates training. The RIT club ultimate frisbee team is called the Spudheds, and they are my family. I have played ultimate frisbee for 9 years, and it has taught me a lot about endurance, spirit, and teamwork.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
