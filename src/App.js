import React, {Component} from 'react';
import {Layout} from "antd";
import {Route, Switch, BrowserRouter as Router, withRouter} from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/user/*'/>
            <Route path='/' component={BasicLayout}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default withRouter(App);
