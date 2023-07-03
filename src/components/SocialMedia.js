import React from 'react';



const SocialMedia = (props) => {

    // destructure props for links
    const { websites } = props;



    // return a Component(HTML/JSX)
    return (
        <div>{
            websites.map((website, index) => {

                return <a 
                        key={index} 
                        href={website.url}
                        target='_blank'
                        rel='noreferrer'
                        >
                        <img src={website.icon} />
                        {website.name}
                        </a>
            })
        }</div>
    );
};

export default SocialMedia;