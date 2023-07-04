import React from 'react';



const SocialMedia = (props) => {

    // destructure props for links
    const { websites } = props;



    // return a Component(HTML/JSX)
    return (
        <div className='socials'>{
            websites.map((website, index) => {

                return <a 
                        key={index} 
                        href={website.url}
                        target='_blank'
                        rel='noreferrer'
                        >
                        <img src={website.icon} height='85%' alt='' />
                        </a>
            })
        }</div>
    );
};

export default SocialMedia;