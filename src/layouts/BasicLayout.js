import React, {Component} from "react";
import {Layout} from "antd";

import {withRouter} from "react-router-dom";
import {Provider} from "mobx-react";

import appStore from "../store/app";
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
      <Provider store={appStore}>
        <Layout>
          <SiderMenu collapsed={this.collapsed}/>
          <Layout>
            <Header/>
            <Content style={{margin: '24px 24px 0'}}>
              <div style={{margin: '-24px -24px 0'}}>
                {this.props.children}
              </div>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
      </Provider>
    )
  }
}

export default withRouter(BasicLayout)
