import React from "react";
import ghICon from '../assets/gitHubIcon.png';



const ProjectLinks = (props) => {

    // destructure props
    const { ghURL, demoURL} = props;


    return (
        <div className="projectLinks">

            <a href={ghURL} target="_blank" rel="noreferrer">
                <img src={ghICon} alt="" />
            </a>

            <a href={demoURL} target="_blank" rel="noreferrer">
                Live Demo
            </a>
            
        </div>
    );
};


export default ProjectLinks;