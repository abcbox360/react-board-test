import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/MessageBoard/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    color1: '#000000',
    color2: 'white' 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

reportWebVitals();
