import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Layout, Spin} from "antd";
import Loadable from 'react-loadable';

import Login from "./pages/Login";
import BasicLayout from "./layouts/BasicLayout";
import Container from "./components/Container"

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path={'/login'} component={Login}/>
          <Route path={'/admin'} render={({match}) => (
            <BasicLayout>
              {/*{adminRouters.map(item => (*/}
                {/*<Route key={item.path} path={`${match.url}/${item.path}`} component={item.component}/>*/}
              {/*))}*/}

              <Route path={`${match.url}/dashboard`} component={Loadable({
                loader: () => import('./pages/DashBoard/DashBoard'),
                loading: () => <Spin />
              })}/>

              <Route path={`${match.url}/users`} render={({match}) => (
                <Container>
                  <Switch>
                    <Route exact={true} path={match.url} component={Loadable({
                      loader: () => import('./pages/Users'),
                      loading: () => <Spin />
                    })}/>

                    <Route path={`${match.url}/:id`} component={Loadable({
                      loader: () => import('./pages/Users/User'),
                      loading: () => <Spin />
                    })}/>
                  </Switch>
                </Container>
              )}/>
            </BasicLayout>
          )}/>
          {this.props.children}
        </Layout>
      </BrowserRouter>
    );
  }
}