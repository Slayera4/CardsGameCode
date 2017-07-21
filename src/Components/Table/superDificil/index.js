import React,{Component} from 'react';
import Card from '../../Card/superDificil/index';
import MyTable from './MyTable';
import {connect} from 'react-redux';

class Table extends Component{
    render(){
        return(
         <MyTable>
             {
                 this.props.Game3.deck.map((card, index) => {
                        const isBeenCompared = this.props.Game3.selectedCouple.indexOf(card) > -1;
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

export default connect(({Game3})=>({Game3})) (Table)