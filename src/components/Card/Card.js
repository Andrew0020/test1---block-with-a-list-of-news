import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            {props.img}
        </div>
    )
}

export default Card;
