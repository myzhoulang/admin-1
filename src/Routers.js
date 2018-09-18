import React, {Component} from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Layout} from "antd";
import {load} from './utils/utils';

import Login from "./pages/Login";
import BasicLayout from "./layouts/BasicLayout";
import Container from "./components/Container"

export default class Routers extends Component {
  render () {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route path={'/login'} component={Login}/>
            <Route path={'/admin'} render={({match}) => (
              <BasicLayout>

                {/*{adminRouters.map(item => (*/}
                {/*<Route key={item.path} path={`${match.url}/${item.path}`} component={item.component}/>*/}
                {/*))}*/}

                <Route path={`${match.url}/dashboard`} component={load(() => import('./pages/DashBoard/DashBoard'))}/>

                <Route path={`${match.url}/users`} strict={true} render={({match}) => (
                  <Container>
                    <Switch>
                      <Route exact={true} strict={true} path={match.url}
                             component={load(() => import('./pages/Users'))}/>
                      <Route exact={true} path={`${match.url}/`} component={load(() => import('./pages/Users/User'))}/>
                      <Route path={`${match.url}/:id`} component={load(() => import('./pages/Users/User'))}/>
                    </Switch>
                  </Container>
                )}/>
              </BasicLayout>
            )}/>
            {this.props.children}
            <Redirect from='/' to='/admin/dashboard'/>
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}