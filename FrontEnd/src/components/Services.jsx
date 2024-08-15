import React from 'react';

const Service = ({ title, image, alt, description }) => {
    return (
        <div>
            <img src={image} alt={alt} />
            <h1>{title} </h1>
            <p> {description}</p>
        </div>
    );
};

export default Service; 