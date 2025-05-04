import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter } from 'react-router-dom';

import 'aos/dist/aos.css';

AOS.init();


AOS.init({
  duration: 1000,
  once: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);