// Importing React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Importing global styling
import './index.css';

// Importing bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing react components
import App from './App';
import Header from './components/header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
