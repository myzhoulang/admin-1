import React, {Component} from "react";
import {Avatar, Button, Icon, Layout, Dropdown, Menu, Tooltip} from "antd";
import {observer} from "mobx-react";

import Notices from './Notices'
import userAvatar from "../../assets/images/user.png";
import appStore from "../../store/app"

const {Header} = Layout;

@observer
export default class HeaderView extends Component {
  render () {
    // 用户更多操作
    const accountContent = (
      <Menu>
        <Menu.Item key="1"><Icon type="user"/>个人中心</Menu.Item>
        <Menu.Item key="2"><Icon type="setting"/>个人设置</Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3"><Icon type="logout"/>退出登录</Menu.Item>
      </Menu>
    )

    return (
      <Header id="header">
        <div className="global-header-index-header">
          <Icon
            className="trigger"
            type={appStore.siderMenuCollapsed? 'menu-unfold' : 'menu-fold'}
            onClick={appStore.toggleSiderMenuCollapsed}
          />

          <div className="global-header-index-right">
            <Tooltip placement="top" title={'使用文档'}>
              <a href="/" className="global-header-index-action">
                <Icon type="question-circle"></Icon>
              </a>
            </Tooltip>

            <Notices/>

            <Dropdown
              overlay={accountContent}
            >
            <span className="global-header-index-action">
                  <Avatar size="small" className="global-header-index-avatar" src={userAvatar} alt=""/>
                  <span>Serati Ma</span>
                </span>
            </Dropdown>
            <Button size="small" style={{margin: '0 8px'}}>English</Button>
          </div>
        </div>
      </Header>
    )
  }
}