import logo from './logo3.png';
import './App.css';
import Button from './components/Button';
import {useState} from 'react';
import Navbar from './components/Navbar';

function App() {
  const [text, setText] = useState('clicca sul bottone');
  function handleClick(event) {
    console.log(event.target);
  }
  
  return (
    
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text={text} handleClick={handleClick}/>
        <Button text='Clicca su'/>

      </header>
    </div>
  );
}

export default App;
