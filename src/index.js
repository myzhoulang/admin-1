import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";
import registerServiceWorker from './registerServiceWorker';


import Routers from "./Routers";
import './index.less';

ReactDOM.render((
  <LocaleProvider locale={zhCN}>
    <Routers />
  </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
