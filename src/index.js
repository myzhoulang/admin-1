import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

ReactDOM.render((
  <HashRouter>
   <App />
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
