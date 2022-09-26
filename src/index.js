import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import store from './Redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


