import React from "react";



const TechStack = (props) => {

    // destructure props
    const { tools } = props;


    // return a Component(HTML/JSX): a TechStack Component
    return (
        <div className="tech-stack-section">

            <div className="tech-stack">
            <strong id="tS-Title">Tech-Stack | </strong>
            {tools.map((tool, index) => {
                return <p key={index}>{tool.info}</p>           
                })}
            </div>

        </div>
    );
};

export default TechStack;