import React, {Component} from "react";
import {Layout} from "antd";
import {Route} from "react-router-dom";


import SiderMenu from "../components/SiderMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashBoard from "../pages/DashBoard/DashBoard";
import Users from "../pages/Users"
const {Content} = Layout;

export default class BasicLayout extends Component{
  render () {
    return (
      <Layout>
        <SiderMenu collapsed={this.collapsed}/>
        <Layout>
          <Header />
          <Content style={{margin: '24px 16px 0'}}>
            <Route path='/dashboard' component={DashBoard} />
            <Route path='/users' component={Users} />
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}
