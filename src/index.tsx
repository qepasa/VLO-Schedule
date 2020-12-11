import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          '--scrollbarBG': '#CFD8DC',
          '--thumbBG': '#90A4AE',
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)'
        },
        '*::-webkit-scrollbar': {
          width: '11px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'var(--scrollbarBG)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--thumbBG)',
          bordeRadius: '6px',
          border: '3px solid var(--scrollbarBG)',
        }
      }
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
