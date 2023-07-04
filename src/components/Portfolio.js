import React from 'react';
import ProjectLinks from './ProjectLinks.js'

import PortfolioProj from '../assets/portfolioSnip.png';
import TodoSnip from '../assets/todoList.png';


const Portfolio = () => {

    // project list
    let projects = [
        {
            name: 'Portfolio Website',
            img: PortfolioProj,
            info: 'The website you are currently viewing.',
            url: '',
            gitHub: 'https://github.com/zznieves/portfolio-2.0'
        }, 
        {
            name: 'ToDo List',
            img: TodoSnip,
            info: 'A web-app for creating a list of tasks.',
            url: 'https://zn-todo-list.netlify.app/',
            gitHub: 'https://github.com/zznieves/todo-list'
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
                            <ProjectLinks ghURL={project.gitHub} demoURL={project.url} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Portfolio;