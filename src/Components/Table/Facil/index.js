import React,{Component} from 'react';
import Card from '../../Card/Facil/index';
import MyTable from './MyTable';
import {connect} from 'react-redux'

class Table extends Component{
    render(){
        return(
         <MyTable>
             {
                 this.props.Game1.deck.map((card, index) => {
                        const isBeenCompared = this.props.Game1.selectedCouple.indexOf(card) > -1;
                        return <Card 
                                    key = {index} 
                                    icon = {card.icon}
                                    isBeenCompared = {isBeenCompared}
                                    selectCard={() => this.props.selectCard(card)}
                                    wasGuessed={card.wasGuessed}

                     />;
                 })
             }
         </MyTable>   
        )
    }
}


export default connect (({Game1})=>({Game1}))(Table)