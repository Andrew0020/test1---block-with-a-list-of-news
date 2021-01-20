import './App.css';
import logo from './logo.svg';
import Card from './components/Card/Card';

const arr = [
    {title: 'Title1',  text: 'Some tex1',  img: <img src={logo} alt="logo" />},
    {title: 'Title2',  text: 'Some tex2',  img: <img src={logo} alt="logo" />},
    {title: 'Title3',  text: 'Some tex3',  img: <img src={logo} alt="logo" />},
    {title: 'Title4',  text: 'Some tex4',  img: <img src={logo} alt="logo" />},
    {title: 'Title5',  text: 'Some tex5',  img: <img src={logo} alt="logo" />},
    {title: 'Title6',  text: 'Some tex6',  img: <img src={logo} alt="logo" />},
    {title: 'Title7',  text: 'Some tex7',  img: <img src={logo} alt="logo" />},
    {title: 'Title8',  text: 'Some tex8',  img: <img src={logo} alt="logo" />},
    {title: 'Title9',  text: 'Some tex9',  img: <img src={logo} alt="logo" />},
    {title: 'Title10', text: 'Some tex10', img: <img src={logo} alt="logo" />},
    {title: 'Title11', text: 'Some tex11', img: <img src={logo} alt="logo" />},
    {title: 'Title12', text: 'Some tex12', img: <img src={logo} alt="logo" />},
    {title: 'Title13', text: 'Some tex13', img: <img src={logo} alt="logo" />},
    {title: 'Title14', text: 'Some tex14', img: <img src={logo} alt="logo" />}
];

function App() {
    return (
        <div className="App">
            { arr.map(item => <Card title={item.title} text={item.text} img={item.img} /> )}
        </div>
    );
}

export default App;
