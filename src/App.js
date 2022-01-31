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
import Masthead from './sections/Masthead';


class App extends Component {
  state = {
    cards: [
      { id: 0, quantity: 0, title: "tizio", img: img1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { id: 1, quantity: 0, title: "caio", img: img2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { id: 2, quantity: 0, title: "sempronio", img: img3, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { id: 3, quantity: 0, title: "ermenegildo", img: img4, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ]

  }

  handleDelete = cardId => {
    const updatedCards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards: updatedCards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({ cards });
  }

  render() {

    return (

      <>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo py-5" alt="logo" />
            <p>
              Test <code>React</code>
            </p>
            <Masthead />
            <div className='container'>
              <div className='row'>
                {this.state.cards.map(card => (
                  <Card
                    key={card.id}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}

export default App;
