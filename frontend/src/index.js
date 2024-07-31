import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storeValue } from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeValue} >
    <App/>
  </Provider>
);


reportWebVitals();
