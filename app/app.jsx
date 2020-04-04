import React from 'react';
import ReactDOM from 'react-dom';
import 'amfe-flexible';
import FastClick from 'lib/fastclick';
import './lib/native$';
import './app.scss';
import Main from './Main';

if ('addEventListener' in document && /iP(hone|od|ad)/.test(navigator.appVersion)) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
)
