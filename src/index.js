import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  { Provider } from 'react-redux'
import getStore from './redux'

const app = (
  <Provider store={getStore()}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
