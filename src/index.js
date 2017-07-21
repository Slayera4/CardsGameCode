import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Game3 from './Performance/superDificil/Game';
import Game2 from './Performance/Dificil/Game';
import Game1 from './Performance/Facil/Game';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './Reducer';
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';



const store = createStore(Reducers);


addLocaleData(en);
addLocaleData(es);



render(  
      <Provider store={store}>
          <Router>
            <Switch>
              <Route path= "/Game3" component={Game3}/>
              <Route path= "/Game2" component={Game2}/>
              <Route path= "/Game1" component={Game1}/>
              <Route path= "/" component={App} />
            </Switch>
          </Router>
      </Provider>
  , document.getElementById('root'));
registerServiceWorker();
