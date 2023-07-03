import React from 'react';



const Title = (props) => {

    // destructure props: each Title can be different
    const { text } = props;


    // return a Component(HTML/JSX): a Title Component
    return <h3 className='title'>{text}</h3>;
};

export default Title;