import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles.css';
import store from './redux/store';
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
