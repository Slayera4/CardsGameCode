import React, { Component } from 'react';
import Header from './Components/Header';
import Table from './Components/Table'
import BuildDeck from './utils/BuildDeck';
import styled from 'styled-components';

import injectStyle from './styles';

injectStyle();


const getInitialState = () => {
  var Deck = BuildDeck();
  return {
    Deck,
    SelectedCouple: [],
    isComparing: false,
    numberAttempts: 0 
  };
}

const MyApp = styled.div`
  background-color: white;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <MyApp>
        <Header
        numberAttempts={this.state.numberAttempts}
        resetGame={() => this.resetGame()}
        ></Header>
        <Table 
          Deck={this.state.Deck}
          SelectedCouple = {this.state.SelectedCouple}
          selectCard={(card) => this.selectCard(card)}
        />
      </MyApp>
    );
  }

  selectCard(card) {
    if (
      this.state.isComparing ||
      this.state.SelectedCouple.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const SelectedCouple = [...this.state.SelectedCouple, card];
    this.setState({
        SelectedCouple
    });

    if (SelectedCouple.length === 2) {
      this.compareCouple(SelectedCouple)
    }
  }
    compareCouple(SelectedCouple) {
      this.setState({isComparing: true});

      setTimeout(() => {
        const [firstCard, secondCard] = SelectedCouple;
        let Deck = this.state.Deck;

        if (firstCard.icon === secondCard.icon) {
            Deck = Deck.map((card) => {
            if(card.icon !== firstCard.icon){
              return card
            }
            return { ...card, wasGuessed: true};
          });
        }
        this.CheckWinner(Deck);
        this.setState({
          SelectedCouple: [],
          Deck,
          isComparing: false,
          numberAttempts: this.state.numberAttempts + 1,
        })
      }, 1000)
    }

    CheckWinner(Deck){
      
        if (
            Deck.filter((card) => !card.wasGuessed).length === 0
      ){
          alert(`You won in ${this.state.numberAttempts} attempts`);
      }
    }

    resetGame(){
      this.setState(
        getInitialState()
      );
    }
}



export default App;
