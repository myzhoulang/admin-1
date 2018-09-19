import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import {NavLink, withRouter} from "react-router-dom";
import {ControllerIcon} from "../Icons";
import {observable, action} from "mobx";
import {observer} from "mobx-react";

import PropTypes from 'prop-types'
import appStore from "../../store/app";

const SubMenu = Menu.SubMenu;

@observer
class BaseMenu extends Component{
  @observable currentPaths = []

  @action.bound
  setCurrentPaths(paths = []){
    this.currentPaths = paths;
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount(){
    const {location} = this.props;
    this.setCurrentPaths([location.pathname])
  }

  getOpenKeys () {
    const {location} = this.props;

    const selectKey = location.pathname;

    const keys = {
      sub1: ['/admin/dashboard'],
      sub3: ['/admin/users']
    }

    for(let item of Object.keys(keys)) {
      if (keys[item].find((k) => k === selectKey)) {
        return [item]
      }
    }
    return []
  }

  render(){
    const {location} = this.props;
    return (
      <Menu
        onClick={(item) => this.setCurrentPaths([item.key])}
        style={{ padding: "16px 0", width: "100%"}}
        theme="dark"
        mode="inline"
        inlineCollapsed={appStore.siderMenuCollapsed}
        selectedKeys={this.currentPaths}
        defaultOpenKeys={this.getOpenKeys()}
        defaultSelectedKeys={[location.pathname]}>
        <SubMenu key="sub1" title={<span><Icon type="dashboard"/><span>实时监控</span></span>}>
          <Menu.Item key="/admin/dashboard">
            <NavLink to="/admin/dashboard" className="nav-text">风控大盘</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="solution" /><span>策略中心</span></span>}>
          <Menu.Item key="2">
            <span className="nav-text">业务配置</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" title={<span><Icon type="team" /><span>管理中心</span></span>}>
          <Menu.Item key="3">
            <span className="nav-text">产品管理</span>
          </Menu.Item>

          <Menu.Item key="/admin/users">
            <NavLink to="/admin/users" className="nav-text">用户管理</NavLink>
          </Menu.Item>

          <Menu.Item key="9">
            <span className="nav-text">角色管理</span>
          </Menu.Item>

          <Menu.Item key="10">
            <span className="nav-text">登录历史</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" title={<span><Icon type="deployment-unit" /><span>模型管理</span></span>}>
          <Menu.Item key="4">
            <span className="nav-text">订单记录</span>
          </Menu.Item>

          <Menu.Item key="7">
            <span className="nav-text">数据统计</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub5" title={<span><Icon type="database" /><span> 数据中心</span></span>}>
          <Menu.Item key="5">
            <span className="nav-text">风控报告</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub6" title={<span><ControllerIcon style={{ color: 'hotpink' }} /><span> 控制中心</span></span>}>
          <Menu.Item key="6">
            <span className="nav-text">进件管理</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default withRouter(BaseMenu)