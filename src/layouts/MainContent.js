import React, {Component} from "react";
import {Breadcrumb, Tabs} from "antd";
import pathToRegexp from "path-to-regexp";
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./style.module.less";
import "./style.less";

const TabPane = Tabs.TabPane;

class MainContent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object
  }

  changeTab = (key) => {
    this.props.onChangeTab(key)
  }

  render () {
    const {
      title,
      content,
      extraContent,
      location,
      logo,
      action,
      tabList,
      className,
      tabActiveKey,
      tabDefaultActiveKey,
      tabBarExtraContent,
    } = this.props;
    const pathName = location.pathname;
    const breadcrumbNameMap = {
      '/admin/orders': '订单管理',
      '/admin/users': '用户管理',
      '/admin/users/': '用户添加',
      '/admin/users/:id': '用户详情'
    };
    const pathSnippets = pathName.split('/').filter(i => i);

    if (pathName[pathName.length - 1] === '/') {
      pathSnippets.push('/')
    }

    let breadcrumbItems = []
    const extraBreadcrumbItems = [];
    pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      Object.keys(breadcrumbNameMap).forEach((item) => {
        if (pathToRegexp(item).test(url)) {
          extraBreadcrumbItems.push(
            <Breadcrumb.Item key={url}>
              {index === pathSnippets.length - 1 ? (breadcrumbNameMap[item]) : (<Link to={url}>
                {breadcrumbNameMap[item]}
              </Link>)}
            </Breadcrumb.Item>);
        }
      })
      return _;
    });

    if (extraBreadcrumbItems.length > 0) {
      breadcrumbItems = [(
        <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
    }

    return (
      <React.Fragment>
        {breadcrumbItems.length > 0 ? (
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            borderBottom: '1px solid #e8e8e8',
            padding: '16px 32px 0'
          }}>
            <Breadcrumb style={{marginBottom: 15}}>
              {breadcrumbItems}
            </Breadcrumb>

            <div className={'page-header-index-detail'} style={{display: 'flex'}}>
              {logo ? <div className={'page-header-index-logo'}>{logo}</div> : null}
              <div className={'page-header-index-main'} style={{flex: 1}}>
                <div className={'page-header-index-row'}>
                  {title && <h1 className={styles.title}>{title}</h1>}
                  {action && <div className={styles.action}>{action}</div>}
                </div>
                <div className={'page-header-index-row'}>
                  {content && <div className={styles.content}>{content}</div>}
                  {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
                </div>
              </div>
            </div>

            {tabList && tabList.length ? (<Tabs
              onChange={this.changeTab}
              className={'page-header-tabs'}
              defaultActiveKey={tabActiveKey || tabList[0].key}
              tabBarExtraContent={tabBarExtraContent}
            >
              {tabList.map(item => (
                <TabPane tab={item.tab} key={item.key} />
              ))}
            </Tabs>): null}
          </div>
        ) : null}

        <div style={{margin: '24px 24px 0'}}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(MainContent)