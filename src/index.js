import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(() => {
  const nav_height = document.querySelector('.app__navbar').offsetHeight;
  console.log(nav_height);
  document.documentElement.style.setProperty('--scroll-padding', nav_height + 16 + 'px');
}, 1000);



