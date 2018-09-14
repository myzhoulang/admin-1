import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";
import {ControllerIcon} from "../Icons";

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const SubMenu = Menu.SubMenu;

class BaseMenu extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  getOpenKeys () {
    const {match, location} = this.props;

    const selectKey = location.pathname;
    const keys = {
      sub1: ['/dashboard'],
      sub3: ['/users']
    }
    for(let item of Object.keys(keys)) {
      if (keys[item].find((k) => k === selectKey)) {
        return [item]
      }
    }
    return []
  }

  render(){
    const {match, location} = this.props;
    return (
      <Menu
        style={{ padding: "16px 0", width: "100%"}}
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={this.getOpenKeys()}
        defaultSelectedKeys={[location.pathname]}>
        <SubMenu key="sub1" title={<span><Icon type="dashboard"/><span>实时监控</span></span>}>
          <Menu.Item key="/dashboard">
            <Link to="/admin/dashboard" className="nav-text">风控大盘</Link>
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

          <Menu.Item key="/users">
            <Link to="/admin/users" className="nav-text">用户管理</Link>
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