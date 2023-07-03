import React from 'react';
import Title from './Title';
import NavBar from './NavBar';


const Header = () => {

    // render a Component(HTML/JSX): a Header Component
    return (
        <div className='flexbox-container header'>
            <Title text='Zayon Nieves' />
            <NavBar
                links = {[
                    {
                        name: 'Home',
                        url: ''
                    },
                    {
                        name: 'About',
                        url: ''
                    },
                    {
                        name: 'Projects',
                        url: ''
                    },
                    {
                        name: 'Contact',
                        url: ''
                    }
                ]}
            />
        </div>
    );
};

export default Header;