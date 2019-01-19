import React, { Component } from 'react';
import cards from "./cards.json";
import SmokeCard from "./components/SmokeCard"
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import './App.css';


let score = 0;
let topScore = 0;
let instructions = "Click on a smokey image to get a point, but dont click on the same one twice!";
let clickedCards = [];

class App extends Component {

  state = {
    cards,
    score,
    topScore,
    instructions,
    clickedCards
    
  };

handleClickedCard = (id) => {

  console.log("clicked: " + id);


  let clickedCards = this.state.clickedCards
  if (clickedCards.indexOf(id) !== -1) {
    // YOU LOSE
    instructions = "Smoked! Sorry, that Smokey Card was already clicked! Try again...";
    clickedCards = [];
    score = 0;
    this.setState({instructions})
    this.setState({clickedCards})
    this.setState({score})
    console.log(instructions)
    
  } else if (clickedCards.length < 9){
    clickedCards.push(id);
    score++
    instructions = "Smokin! Keep going!"

    if (score > topScore){
      topScore = score;
      this.setState({ topScore });
    }

    console.log(score)
    console.log(topScore)
    console.log(instructions)

    // Found this shuffle function online at https://css-tricks.com/snippets/javascript/shuffle-array/ 
    let cards = this.state.cards
    cards.sort(function() { return 0.5 - Math.random() });

    this.setState({instructions})
    this.setState({clickedCards})
    this.setState({score})

  
  } else {
    instructions = "Winner, Winner, Chicken Dinner! Wanna try for another?"
    topScore = 10
    score = 0
    clickedCards = [];

    // Found this shuffle function online at https://css-tricks.com/snippets/javascript/shuffle-array/ 
    let cards = this.state.cards
    cards.sort(function() { return 0.5 - Math.random() });

    this.setState({instructions})
    this.setState({clickedCards})
    this.setState({score})
    this.setState({topScore})

    console.log(instructions)
    
  }

}
  
  render() {
    return (
      <Wrapper>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <Jumbotron
        instructions={this.state.instructions}
        />
          
        {
          this.state.cards.map(card => (
          <SmokeCard
            id={card.id}
            key={card.id}
            image={card.image}
            handleClickedCard={this.handleClickedCard}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
