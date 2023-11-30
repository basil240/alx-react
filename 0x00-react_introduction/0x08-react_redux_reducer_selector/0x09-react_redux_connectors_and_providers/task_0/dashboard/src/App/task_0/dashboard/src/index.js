// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './path-to-your-ui-reducer'; 

import App from './path-to-your-App-component'; 

const store = createStore(uiReducer);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);