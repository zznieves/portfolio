import React from 'react';
import ProjectLinks from './ProjectLinks.js'


const Portfolio = () => {

    // project list
    let projects = [
        {
            name: 'Portfolio Website',
            img: '',
            info: 'The website you are currently viewing.'
        }, 
        {
            name: 'ToDo List',
            img: '',
            info: 'A web-app for creating a list of tasks.'
        }
    ];


    return (
        <div className='portfolio'>
            {projects.map((project, index) => {

                // return a project for each JavaScript Object
                return (
                    <div key={index} className='project' id={index + 1}>

                        <img src={project.img} alt='Project Screenshot'/>

                        <div className='project-info'>
                            <h3>{project.name}</h3>
                            <p>
                                {project.info}
                            </p>
                            <ProjectLinks />
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
};

export default Portfolio;