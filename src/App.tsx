import * as React from 'react';
import {ReactElement, useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import arr from './data';

interface IArrElem {
    id: number;
    title: string;
    text: string;
    img: ReactElement;
}

const arrLength = arr.length;

const ShowContent = ({ data }: {data: Array<IArrElem>}) => {
    return (
        <div className="App">
            { data.map((item: IArrElem) => <Card key={item.id} title={item.title} text={item.text} img={item.img} /> )}
        </div>
    );
}

const ShowMore = ({ setData, range, setRange }: {setData: Function; range: number; setRange: Function;}) => {
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
