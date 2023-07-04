import React from 'react';
import SocialMedia from './SocialMedia';
import ProfilePic from '../assets/profilePicZ.jpg'

import LinkedInIcon from '../assets/LinkedIn.png';
import GitHubIcon from '../assets/gitHubIcon.png';


const HomeContent = () => {

    // return a Component(HTML/JSX): a HomeContent Component
    return (
        <div className='home-content'>
            <div className='intro'>

                <strong>Full-Stack Developer</strong>
                <br />
                <p>Hello, I'm Zayon Nieves. A passionate Full-Stack<br />
                Developer based in Atlanta, GA.</p>

                <SocialMedia
                websites = {[
                    {
                        name: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/zayon-nieves-b97582165/',
                        icon: LinkedInIcon
                    }, 
                    {
                        name: 'GitHub',
                        url: 'https://github.com/zznieves',
                        icon: GitHubIcon
                    }
                ]}
                />

            </div>

            <div id='profilePic'>
                <img src={ProfilePic} alt='' />
            </div>
        </div>
    );
};

export default HomeContent;