import logo from './logo3.png';
import './App.css';
import Button from './components/Button';
import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'


class App extends Component {
  state = {
    cards: [
      { id: 0, title: "tizio", img: img1, descrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
      { id: 1, title: "caio", img: img2, descrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
      { id: 2, title: "sempronio", img: img3, descrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
      { id: 3, title: "ermenegildo", img: img4, descrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ]

  }
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
              {this.state.cards.map(card => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.descrption}
                  img={card.img}
                />
              ))}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
