// React Import

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StageQuestion from './pages/StageQuestion';
import 'bootstrap'

// Redux Import
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'


// ------ Initial State

const initialState = {
  comparisonData: [],
  answersPoints: [],
  answersPointsArray: [],
}

// ------ Redux STORE

const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducer, initialState, ComposeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <StageQuestion/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

