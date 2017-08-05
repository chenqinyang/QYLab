import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import history from './framework/History';
import reducers from './reducer';
import Header from './Header';
import AppController from './framework/AppController';


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


const store = createStore(
  reducers //,
  // applyMiddleware(middleware)
);

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

        <Provider store={store}>

          <AppController history={history}/>

        </Provider>

      </div>
        
        
    );
  }
}

export default App;
