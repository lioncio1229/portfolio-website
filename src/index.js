import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorApp from './calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>
);
