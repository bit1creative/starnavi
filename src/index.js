import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store'
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
