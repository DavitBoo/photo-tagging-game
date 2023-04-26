import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
// import './index.css';
import App from './App';

import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap');

  :root{
    --color-dark-blue: #031926;
    --color-light-blue: #9DBEBB; 
  }

  body{
    background-color: var(--color-dark-blue);
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
  }

  a{
    color: #fff;
    text-decoration: none;
  }

  a:hover{
    color: var(--color-light-blue);
  }

  #background-image{
    width: 100%;
  }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

