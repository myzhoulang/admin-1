import React, {Component} from "react";
import {Layout, Breadcrumb} from "antd";
import {Route, BrowserRouter as Router, Switch, Redirect, Link} from "react-router-dom";
import Loadable from 'react-loadable';
import pathToRegexp from 'path-to-regexp';

import SiderMenu from "../components/SiderMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import DashBoard from "../pages/DashBoard/DashBoard";
// import UsersList from "../pages/User";
// import User from "../pages/User/User";

const {Content} = Layout;

export default class BasicLayout extends Component {
  render () {
    const UserContainer = ({match}) => {
      return (
        <div>
          <Switch>
            <Route exact path={match.url} component={Loadable({
              loader: () => import('../pages/User'),
              loading () {
                return <div>Loading...</div>
              },
            })}/>
            <Route path={`${match.url}/:id`} component={Loadable({
              loader: () => import('../pages/User/User'),
              loading () {
                return <div>Loading...</div>
              },
            })}/>
          </Switch>
        </div>
      )
    }
    const breadcrumbNameMap = {
      '/dashboard': 'Dashboard',
      '/users': '用户管理',
      '/users/:id': '用户详情'
    };
    const {location} = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = [];

    pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      Object.keys(breadcrumbNameMap).forEach((item) => {
        if (pathToRegexp(item).test(url)) {
          extraBreadcrumbItems.push(
            <Breadcrumb.Item key={url}>
              {index === pathSnippets.length - 1 ? (breadcrumbNameMap[item]) : (<Link to={url}>
                {breadcrumbNameMap[item]}
              </Link>)}
            </Breadcrumb.Item>);
        }
      })
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);

    return (
        <Layout>
          <SiderMenu collapsed={this.collapsed}/>
          <Layout>
            <Header/>
            <Content style={{margin: '24px 16px 0'}}>
              <Breadcrumb>
                {breadcrumbItems}
              </Breadcrumb>
              <Switch>
                <Route path='/dashboard' component={
                  Loadable({
                    loader: () => import('../pages/DashBoard/DashBoard'),
                    loading () {
                      return <div>Loading...</div>
                    },
                  })
                }/>
                <Route path='/users' component={UserContainer}/>
                <Redirect to={`/dashboard`}/>
              </Switch>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
    )
  }
}
