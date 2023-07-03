import React from 'react';
import SocialMedia from './SocialMedia';
import ProfilePic from '../assets/profilePicZ.jpg'


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
                        url: '',
                        icon: ''
                    }, 
                    {
                        name: 'GitHub',
                        url: '',
                        icon: ''
                    }
                ]}
                />

            </div>

            <div id='profilePic'>
                <img src={ProfilePic} />
            </div>
        </div>
    );
};

export default HomeContent;