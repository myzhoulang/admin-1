import React, {Component} from "react";
import {Layout} from "antd";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";


import SiderMenu from "../components/SiderMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashBoard from "../pages/DashBoard/DashBoard";
import UsersList from "../pages/User";
import User from "../pages/User/User";

const {Content} = Layout;

export default class BasicLayout extends Component {

  render () {
    const UserContainer = ({match}) => {
      return (
        <div>
          <Switch>
            <Route exact path={match.url} component={UsersList}/>
            <Route path={`${match.url}/:id`} component={User}/>
          </Switch>
        </div>
      )
    }
    return (
      <Router>
        <Layout>
          <SiderMenu collapsed={this.collapsed}/>
          <Layout>
            <Header/>
            <Content style={{margin: '24px 16px 0'}}>
              <Route path='/dashboard' component={DashBoard}/>
              <Route path='/users' component={UserContainer}/>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
