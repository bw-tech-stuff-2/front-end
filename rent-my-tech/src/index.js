// React Boilerplate
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Reducer
import reducer from './store/reducers' // combines reducers <---

// React Router
import {BrowserRouter as Router} from 'react-router-dom'

// Store Setup - Redux Implementation
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Styles
import './index.css';

// Create Store
const store = createStore(reducer, applyMiddleware(thunk, logger))
// thunk handles async action calls
// logger is logging state in the console before & after

ReactDOM.render(
  <Provider store={store}> {/* Inject the store into the application */}
    <Router> {/* For using react-router inside our app */}
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('root') // Starting Point for React 
);
