import logo from './logo3.png';
import './App.css';
import Button from './components/Button';
import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';


class App extends Component {
  render() {

    return (

      <div className="App">
        <Navbar />
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
          <Button text='Clicca su' />
          <div className='container'>
            <div className='row'>
              <Card />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
