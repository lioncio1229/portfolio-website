import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTheme from './theme.provider';
import { Homepage, CalculatorApp } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyTheme>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/calculator' element={<CalculatorApp/>} />
      </Routes>
    </BrowserRouter>
  </MyTheme>
);
