import React, { Component } from 'react';
import Header from '../../Components/Header/Facil/index';
import Table from '../../Components/Table/Facil/index';
import styled from 'styled-components';
import {connect} from 'react-redux';

import injectStyle from '../../styles';

injectStyle();

const MyApp = styled.div`
  background-color: white;
`;

class Game1 extends Component {


  render() {
    return (
      <MyApp>
        <Header
        resetGame={() => this.resetGame()}
        />
        <Table 
          selectCard={(card) => this.selectCard(card)}
        />
      </MyApp>
    );
  }

  selectCard(card) {
    if (
      this.props.Game1.isComparing ||
      this.props.Game1.selectedCouple.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const selectedCouple = [...this.props.Game1.selectedCouple, card];
    this.props.dispatch({type: 'SELECTED', couple: selectedCouple})


    if (selectedCouple.length === 2) {
     this.compareCouple(selectedCouple)
    }
  }

    compareCouple(selectedCouple) {
      this.props.dispatch({type: "COMPARE" }) 
      setTimeout(() => {
        const [firstCard, secondCard] = this.props.Game1.selectedCouple;
        let deck = this.props.Game1.deck;

        if (firstCard.icon === secondCard.icon) {
          this.props.dispatch({type:"INC_HITS"})
            deck = deck.map((card) => {
            if(firstCard.icon !== card.icon){
                 return card
                    
            }
                   this.CheckWinner(deck);

           return card.wasGuessed = true


          });
        }
      this.props.dispatch({type: 'INC_ATTEMPTS'})


      }, 1000)
     
    }

    CheckWinner(deck){
      
        if (deck.filter((card) => !card.wasGuessed).length === 1){
           alert(`You won in ${this.props.Game1.numberAttempts} attempts`);
           this.props.dispatch({type:"RESET"})}
    }

    resetGame(){
        this.props.dispatch({type:"RESET"})
    }
}



export default connect (({Game1}) => ({Game1}))(Game1);