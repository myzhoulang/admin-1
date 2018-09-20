import React, {Component} from "react";
import {Avatar, Button, Icon, Layout, Dropdown, Menu, Tooltip} from "antd";
import {observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types'

import Notices from './Notices'
import userAvatar from "../../assets/images/user.png";
import appStore from "../../store/app"
import HeaderStyle from './index.module.less';

const {Header} = Layout;

@observer
class HeaderView extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  logout = () => {
    this.props.history.push('/login');
  }

  render () {
    // 用户更多操作
    const accountContent = (
      <Menu>
        <Menu.Item key="1"><Icon type="user"/>个人中心</Menu.Item>
        <Menu.Item key="2"><Icon type="setting"/>个人设置</Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3" onClick={this.logout}><Icon type="logout"/>退出登录</Menu.Item>
      </Menu>
    )

    return (
      <Header className={HeaderStyle.header}>
        <div className={HeaderStyle.globalHeaderIndexHeader} style={{boxShadow: '0 1px 4px rgba(0,21,41,.08)'}}>
          <Icon
            className={HeaderStyle.trigger}
            type={appStore.siderMenuCollapsed? 'menu-unfold' : 'menu-fold'}
            onClick={appStore.toggleSiderMenuCollapsed}
          />

          <div className={HeaderStyle.globalHeaderIndexRight}>
            <Tooltip placement="top" title={'使用文档'}>
              <a href="/" className={HeaderStyle.globalHeaderIndexAction}>
                <Icon type="question-circle" />
              </a>
            </Tooltip>

            <Notices/>

            <Dropdown
              overlay={accountContent}
            >
            <span className={HeaderStyle.globalHeaderIndexAction}>
                  <Avatar size="small" className={HeaderStyle.globalHeaderIndexAvatar} src={userAvatar} alt=""/>
                  <span>zhoulang</span>
                </span>
            </Dropdown>
            <Button htmlType={'button'} size="small" style={{margin: '0 8px'}}>English</Button>
          </div>
        </div>
      </Header>
    )
  }
}

export default withRouter(HeaderView)