import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BodyStyle } from "./styles"


ReactDOM.render(
  <React.StrictMode>
    <BodyStyle>
      <App />
    </BodyStyle>
  </React.StrictMode>,
  document.getElementById('root')
);


