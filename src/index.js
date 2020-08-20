// React Import

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap';
import App from './routes/App';

// Redux Import
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

// ------ Initial State

const initialState = {
  comparisonData: [],
  comparisonName: 'Honey',
  answersPoints: [],
  answersPointsArray: [],
};

// ------ Redux STORE

// const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
