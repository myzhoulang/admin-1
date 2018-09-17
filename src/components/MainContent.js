import React, {Component} from "react";
import {Breadcrumb} from "antd";
import pathToRegexp from "path-to-regexp";
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./style.module.less";

console.log(styles)

class MainContent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object
  }

  render () {
    const {title, content, extraContent, location} = this.props;
    const breadcrumbNameMap = {
      '/admin/users': '用户管理',
      '/admin/users/:id': '用户详情'
    };
    const pathSnippets = location.pathname.split('/').filter(i => i);
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
    });

    if(extraBreadcrumbItems.length > 0) {
      breadcrumbItems = [(
        <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
    }

    return (
      <React.Fragment>
        {breadcrumbItems.length > 0 ? (
          <div className={'page-header-index-detail'} style={{display: "flex"}}>
            <div style={{
              flex: 1,
              backgroundColor: '#fff',
              borderBottom: '1px solid #e8e8e8',
              padding: '16px 32px 0'
            }}>
              <Breadcrumb style={{marginBottom: 15}}>
                {breadcrumbItems}
              </Breadcrumb>

              <div className={'page-header-index-row'}>
                {title && <h2 className={styles.title}>{title}</h2>}
              </div>
              <div className={'page-header-index-row'}>
                {content && <div className={styles.content}>{content}</div>}
                {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
              </div>
            </div>
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