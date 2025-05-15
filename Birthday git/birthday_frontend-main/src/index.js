import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppWrapper from './AppWrapper'; // Import AppWrapper
import './styles/custom.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
