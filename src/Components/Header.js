import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;
const Title = styled.div`
    font-size: 25px;
    padding: 10px;
    color: black;
    font: 150% sans-serif;
`;
const ResetButton = styled.button`
    position: absolute;
    left: 12px;
    top: 90px;
`;
const Animals2 = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: 170px
`;
const Animals = styled.img`
    width: 29%;
    position: absolute;
    margin-left: 28%;
    margin-bottom: 100px;
`;

export default class Header extends Component {
    render() {
        return(
            <Container>
                <Title>Memory Game</Title>
                <ResetButton onClick={this.props.resetGame}>
                    Reset
                    </ResetButton>
                <Animals2><Animals  src="http://i65.tinypic.com/2zq4n82.png" alt=""/></Animals2>
                <Title>
                   Attempts:{this.props.numberAttempts}
                </Title>
            </Container>
        );
    }
};