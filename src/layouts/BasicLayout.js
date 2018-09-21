import React, {Component} from "react";
import {Layout} from "antd";

import {withRouter} from "react-router-dom";


import SiderMenu from "../components/SiderMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

const {Content} = Layout;

class BasicLayout extends Component {

  componentWillReceiveProps () {
    console.log(arguments)
  }

  render () {
    return (
      <Layout>
        <SiderMenu collapsed={this.collapsed}/>
        <Layout>
          <Header/>
          <Content style={{margin: '24px 24px 0'}}>
            <div  style={{margin: '-24px -24px 0'}}>
              {this.props.children}
            </div>
          </Content>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(BasicLayout)
