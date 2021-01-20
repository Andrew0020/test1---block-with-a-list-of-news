import React from 'react';

const Card = ({ title, text, img }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            {img}
        </div>
    )
}

export default Card;
