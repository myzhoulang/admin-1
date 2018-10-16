import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";
import registerServiceWorker from './registerServiceWorker';

import './utils/http';
import Routers from "./Routers";
import './index.less';
console.log(process.env)
ReactDOM.render((
  <LocaleProvider locale={zhCN}>
    <Routers />
  </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
