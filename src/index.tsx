import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/enyo/font.css';
import './baseStyling.css';
import Amplify from 'aws-amplify';
import config from './aws-exports.js';
import App from './App';
import './i18n';

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));
