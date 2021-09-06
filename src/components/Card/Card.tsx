import * as React from 'react';
import {ReactElement} from "react";

const Card = ({ title, text, img }: {title: string; text: string; img: ReactElement;}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            {img}
        </div>
    )
}

export default Card;
