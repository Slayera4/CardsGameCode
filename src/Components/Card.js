import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import styled from 'styled-components';

const Cardimg = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 15px;
  }
`;
const CardHolder = styled.div`
    width: 125px;
    height: 125px;
  }
`;
const Cover = styled.div`
    width: 125px;
    height: 125px;
    background-image: url('http://i68.tinypic.com/2itndhl.png');
    border-radius: 15px;
    border: 2px solid;
  }
`;
const Content = styled.div`
    width: 125px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 15px;
  }
`;
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
                    
                        <Cardimg  src={this.props.icon} alt={''} />
                     
                    </Content>

                </FlipCard>

            </CardHolder>
        )
    }
}