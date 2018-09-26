import React, {Component} from "react";
import {Avatar, Button, Icon, Layout, Dropdown, Menu, Tooltip} from "antd";
import {observer, inject} from "mobx-react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

import Notices from './Notices'
import userAvatar from "../../assets/images/user.png";
import HeaderStyle from './index.module.less';

const {Header} = Layout;

@inject('store')
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
        <div className={HeaderStyle.globalHeaderIndexHeader}>

          <Icon
            className={HeaderStyle.trigger}
            type={this.props.store.siderMenuCollapsed? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.store.toggleSiderMenuCollapsed}
          />

          <div className={HeaderStyle.globalHeaderIndexRight}>
            <a href="/" className={HeaderStyle.globalHeaderIndexAction}>
              <Icon type="fullscreen" theme="outlined" />
            </a>

            {/*帮助*/}
            <Tooltip placement="top" title={'使用文档'}>
              <a href="/" className={HeaderStyle.globalHeaderIndexAction}>
                <Icon type="question-circle" />
              </a>
            </Tooltip>

            {/*通知*/}
            <Notices/>

            {/*登录用户*/}
            <Dropdown
              overlay={accountContent}
            >
            <span className={HeaderStyle.globalHeaderIndexAction}>
                  <Avatar size="small" className={HeaderStyle.globalHeaderIndexAvatar} src={userAvatar} alt=""/>
                  <span>zhoulang</span>
                </span>
            </Dropdown>

            {/*语言选择*/}
            <Button htmlType={'button'} size="small" style={{margin: '0 8px'}}>English</Button>
          </div>
        </div>
      </Header>
    )
  }
}

export default withRouter(HeaderView)