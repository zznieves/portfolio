import React from "react";
import ghICon from '../assets/gitHubIcon.png';



const ProjectLinks = (props) => {

    // destructure props
    const { ghURL, demoURL} = props;


    return (
        <div className="projectLinks">

            <a href={ghURL}>
                <img src={ghICon} alt="" />
            </a>

            <a href={demoURL}>
                Live Demo <img src='' alt="" />
            </a>
            
        </div>
    );
};


export default ProjectLinks;