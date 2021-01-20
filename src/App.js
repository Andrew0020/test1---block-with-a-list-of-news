import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import arr from './data';

const arrLength = arr.length;

const ShowContent = ({ data }) => {
    return (
        <div className="App">
            { data.map(item => <Card key={item.id} title={item.title} text={item.text} img={item.img} /> )}
        </div>
    );
}

const ShowMore = ({ setData, range, setRange }) => {
    const handleClick = () => {
        if (range < arrLength) {
            setRange(range + 5);
            setData(arr.slice(0, range + 5));
        }
    }

    return (range < arrLength) ? <div className="Button" onClick={handleClick}>ShowMore</div> : null;
}

const App = () => {
    const [data, setData] = useState(arr.slice(0, 5));
    const [range, setRange] = useState(5);

    return (
        <>
            <ShowContent data={data} />
            <ShowMore
                setData={setData}
                range={range}
                setRange={setRange}
            />
        </>
    );
}

export default App;
