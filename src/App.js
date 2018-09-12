import React, {Component} from 'react';
import {observable, action} from 'mobx';
import {observer} from "mobx-react";
import {Layout} from "antd";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";


@observer
class App extends Component {
  @observable collapsed = false;

  @action toggle = () => {
    this.collapsed = !this.collapsed;
  }

  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/user/*'/>
            <Route exact path='*' component={BasicLayout}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
