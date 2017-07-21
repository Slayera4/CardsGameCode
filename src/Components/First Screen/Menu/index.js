import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyButton from './Button';
import MyContainer from './Container';
import Logo from './Logo';
import SuperContainer from './SuperContainer';
import {UK,Spain} from './Banderas';
import header from './Header'
import { FormattedMessage, IntlProvider } from 'react-intl';
import {connect} from 'react-redux'
import spanishMessages from '../../../languages/es'
import englishMessages from '../../../languages/en'



class Menu extends Component {



onChangeLanguage(lang){
        switch (lang) {
            case 'es': this.props.translates.messages = spanishMessages.messages; break;
            case 'en': this.props.translates.messages = englishMessages.messages; break;
            default: this.props.translates.messages = spanishMessages.messages; break;
        }
        this.setState({ locale: lang });
        this.props.translates.locates=lang
}


 render(){
    return(
     <IntlProvider locale={this.props.translates.locale} messages={this.props.translates.messages}>
     <SuperContainer>
       <header>
            <Logo src="http://i65.tinypic.com/2zq4n82.png" alt=""/>
            <Spain src="https://vignette1.wikia.nocookie.net/althistory/images/5/54/Bandera_espa%C3%B1ola.png/revision/latest/scale-to-width-down/640?cb=20121205204802&path-prefix=es" alt="" onClick={()=>this.onChangeLanguage('es')}/>
            <UK src="http://i66.tinypic.com/o5w0p3.jpg" alt="adios"onClick={()=>this.onChangeLanguage('en')}/>
      </header>
      <MyContainer>
      <Link to="/Game1"><MyButton>  <FormattedMessage id="app.button1"/>        </MyButton></Link>
            <hr />
      <Link to="/Game2"><MyButton>    <FormattedMessage id="app.button2"/>       </MyButton></Link>
            <hr />
      <Link to="/Game3"><MyButton><FormattedMessage id="app.button3"/> </MyButton></Link>
      </MyContainer>
      </SuperContainer>
      </IntlProvider>
    )
  }
}
export default connect(({translates})=>({translates}))(Menu);