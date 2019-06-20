// imports from dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// file imports
import rootReducer from './redux/reducers'; // all reducers
import rootSaga from './redux/sagas'; // all sagas
import App from './App/App'; // App component

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
const middlewareList = [sagaMiddleware, logger];

// Create one store that all components can use
const store = createStore(
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware( ...middlewareList ),
);

// This tells the saga middleware to run the watcherSaga 
sagaMiddleware.run( rootSaga );

// Wrap entire App component in provider and append to 'root' in html
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'react-root' )
);
