import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

ReactDOM.render((
  <LocaleProvider locale={zhCN}>
    <App/>
  </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
