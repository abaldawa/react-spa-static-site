import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();


/**
 * Basically if URL is of format "https://url.com/#!/page1" then below
 * regexp will extract "/page1" from the above URL
 */
const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];


if (path) {
    /**
     * If there was an existing path then replace the state of the
     * browser history. This will not make any network call to the
     * backend just will replace the history so our react SPA router
     * can route to appropriate page
     */
    browserHistory.replace(path);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
