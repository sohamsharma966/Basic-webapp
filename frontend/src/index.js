import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App'; // App() from app.js function imported.
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render( 
  <React.StrictMode> 
    <Provider store={store}> {/* it includes Provider component that wraps the App component, which is a common pattern for using Redux with React. */}
      <App />  {/* using app() function and create new file for it app.js file. */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
