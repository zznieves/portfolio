import React from 'react';



const NavBar = (props) => {

    // destructure props: each NavBar Component can be different
    const { links } = props;


    // return a Component(HTML/JSX): a NavBar Component
    return (
        <div className='navBar header-navBar'>
            {links.map((link, index) => {

                // return an anchor tag for eac hyperlink
                return <a key={index} href={link.url}>{link.name}</a>
            })}
        </div>
    );
};


export default NavBar;