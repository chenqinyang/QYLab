import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import history from './framework/History';
import reducers from './reducer';
import Header from './Header';
import AppController from './framework/AppController';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';

//saga
import createSagaMiddleware from 'redux-saga';
import sagaA from './saga//sagaA'


// Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }) //,
//   // applyMiddleware(middleware)
// );


// This example app only uses English. A fake `"en-UPPER"` locale is created so
// translations can be emulated.
addLocaleData(en);
addLocaleData({
    locale: 'en-UPPER',
    parentLocale: 'en'
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware(
  {
    emitter: emit => action => {
     console.log("saga monitor : ", emit);
     console.log("saga monitor action : ", action);
    }
  }
)

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagaA);

// store.dispatch(push('/EntryPage'));

class App extends Component {

  constructor(props) {
      super(props);

      console.log("App.props = ", props);
  }

  render() {
    return (

      <div>

        <Header />

        <br/><br/><br/>

        <IntlProvider locale="en">

          <Provider store={store}>

            <AppController history={history}/>

          </Provider>

        </IntlProvider>

      </div>
        
        
    );
  }
}

export default App;
