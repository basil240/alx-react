import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer that combines your reducers

import App from './App';

// Create the Redux store with the rootReducer
const store = createStore(rootReducer);

ReactDOM.render(
  // Wrap your App component with the Provider and pass the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);