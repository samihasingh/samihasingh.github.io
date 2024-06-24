import React from 'react';
import App from './App';
import theme from './theme';
// import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);