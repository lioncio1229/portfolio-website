import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorApp from './calculator';
// import LearnTheming from './learn-theming';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CalculatorApp/>
  </React.StrictMode>
);
