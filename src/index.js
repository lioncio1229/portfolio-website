import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTheme from './theme.provider';
import { Homepage } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyTheme>
    <Homepage/>
  </MyTheme>
);
