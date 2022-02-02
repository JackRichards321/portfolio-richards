import React from 'react';
import { projects } from "./data.js"

const ProjectList = () => {
    return (
        <section className="projects">
            <div className="projectListBar">
            </div>
            <div className="projectFrame">
            {projects.map((project) => (
                <div key={project.key} className="projectDiv">
                    <a href={project.link} className="projectComponents">
                        <div className="projectImgDiv">
                            <img alt="project" src={project.image} className="projectImg"/>
                        </div>
                        <div className="centerFlex">
                            <h2>{project.subtitle}</h2>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </a>
                </div>
            ))}
            </div>
        </section>
    )
}

export default ProjectList;