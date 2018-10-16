import React, {Component} from 'react';
import {Layout} from "antd";
import {Route, Switch, withRouter} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
class App extends Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route path='/user/*'/>
          <Route path='/' component={BasicLayout}/>
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
