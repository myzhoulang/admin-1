import React, {Component} from 'react';
import {Layout} from "antd";
import {observer} from 'mobx-react';
import {Link} from "react-router-dom";

import BaseMenu from './BaseMenu';
import logo from "../../assets/svg/logo.svg";
import appStore from "../../store/app";

const {Sider} = Layout;

@observer
class SliderBar extends Component{
  breakPoint (broken) {
    if(broken){
      appStore.toggleSiderMenuCollapsed()
    }
  }
  render () {
    return (
      <Sider
        width={256}
        breakpoint="lg"
        trigger={null}
        collapsible
        onBreakpoint={this.breakPoint}
        collapsed={appStore.siderMenuCollapsed}
      >
        <div className="sider-menu-index-logo" key="logo" id="logo">
          <Link to='/'>
            <img src={logo} alt="logo" />
            <h1>孚临风控商户中心</h1>
          </Link>
        </div>
        <BaseMenu {...this.props} />
      </Sider>
    )
  }
}
export default SliderBar;