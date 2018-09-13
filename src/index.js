import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";
import {BrowserRouter} from "react-router-dom";


import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

ReactDOM.render((
  <LocaleProvider locale={zhCN}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
