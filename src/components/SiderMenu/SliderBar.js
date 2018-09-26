import React, {Component} from 'react';
import {Layout} from "antd";
import {observer, inject} from 'mobx-react';
import {Link} from "react-router-dom";

import BaseMenu from './BaseMenu';
import logo from "../../assets/svg/logo.svg";
import styles from "./index.module.less";

const {Sider} = Layout;

@inject('store')
@observer
class SliderBar extends Component{
  breakPoint (broken) {
    if(broken){
      this.props.store.toggleSiderMenuCollapsed()
    }
  }
  render () {
    return (
      <Sider
        width={256}
        breakpoint="xl"
        trigger={null}
        collapsible
        onBreakpoint={this.breakPoint}
        collapsed={this.props.store.siderMenuCollapsed}
      >
        <div className={styles.siderMenuIndexLogo} key="logo" id="logo">
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