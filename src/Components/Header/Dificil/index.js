import React, {Component} from 'react';

import MyButton from './MyButton';
import {Container, Title, Animals2, Animals} from './SmallComponents'
import {connect} from 'react-redux'
import {FormattedMessage, IntlProvider} from 'react-intl';


class Header extends Component {

    
        render() {
        return(
         <IntlProvider locale={this.props.translates.locale} messages={this.props.translates.messages}>
            <Container>
                <Title><FormattedMessage id="app.title"/></Title>
                <MyButton onClick={this.props.resetGame}>
                    <FormattedMessage id="app.reset" />
                    </MyButton>
                <Animals2><Animals  src="http://i65.tinypic.com/2zq4n82.png" alt=""/></Animals2>
                <Title>
                   <FormattedMessage id="app.info1" values={{attempts: <p>{this.props.Game2.numberAttempts}</p>}}/>
                </Title>
                <Title>
                    <FormattedMessage id="app.info2" values={{hits:<p>{this.props.Game2.hits}</p>}}/>
                </Title>
            </Container>
        </IntlProvider>
        );
        
    }
    
};



export default connect(({Game2,translates}) => ({Game2,translates}))(Header);
