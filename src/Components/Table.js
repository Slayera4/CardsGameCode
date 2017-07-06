import React,{Component} from 'react';
import Card from './Card';
import styled from 'styled-components';

const MyTable = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 700px;
    height: 600px;
    margin: 0 auto;
    justify-content: space-around;
`;

export default class Table extends Component{
    render(){
        return(
         <MyTable>
             {
                 this.props.Deck.map((card, index) => {
                        const isBeenCompared = this.props.SelectedCouple.indexOf(card) > -1;
                     return <Card 
                key = {index} 
                icon = {card.icon}
                isBeenCompared = {isBeenCompared}
                selectCard={() => this.props.selectCard(card)}
                wasGuessed={card.wasGuessed}
                     />;})
             }
         </MyTable>   
        )
    }
}