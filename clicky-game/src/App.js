import React, { Component } from 'react';
import cards from "./cards.json";
import Card from "./components/Card"
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import './App.css';


// Found this shuffle function online at https://css-tricks.com/snippets/javascript/shuffle-array/ 
function shuffle() {
cards.sort(function() { return 0.5 - Math.random() });
}
class App extends Component {

  state = {
    cards,
    score: 0,
    topScore: 0,
    clickedCard: []
    
  };

  // function that shuffles the cards, called "on click"
  handleShuffle = () => {
    let shuffleCards = shuffle(cards);
    this.setState({cards: shuffleCards})
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        {this.state.cards.map(cards => (
        <Card
          id={cards.id}
          key={cards.id}
          image={cards.image}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
