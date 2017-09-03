import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

import Img from './Img';
import CardHolder from './CardHolder';
import Cover from './Cover';
import Content from './Content';

export default class Card extends Component {
    
    
    render() {
        return (
            <CardHolder onClick={this.props.selectCard}>
                <FlipCard
                    flipped={this.props.isBeenCompared || this.props.wasGuessed}
                    disabled={true}
                >
                    <Cover></Cover>
                    <Content>
                    
                        <Img  src={this.props.icon} alt={''} />
                     
                    </Content>

                </FlipCard>

            </CardHolder>
        )
    }
}
