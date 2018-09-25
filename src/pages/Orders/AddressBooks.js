import React, {Component} from "react";
import {Table, Card, Row, Col, Input} from "antd";
import pStyle from "../../index.module.less";
import classnames from "classnames";

const Search = Input.Search;

export default class AddressBooks extends Component {

  render () {
    // TODO 表头
    const column = [{
      title: "姓名",
      dataIndex: "name",
      key: "name"
    }, {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
    }];

    // TODO 数据
    const books = [
      {id: 0, name: "收纸皮", phone: "15750825744"},
      {id: 1, name: "陈梦莹", phone: "18506032337"},
      {id: 2, name: "美团", phone: "13055285664"},
      {id: 3, name: "饿了", phone: "15860034972"},
      {id: 4, name: "老爹莆田", phone: "18857062076"},
      {id: 5, name: "榴莲", phone: "18359163700"},
    ];

    return (
      <React.Fragment>
        <Card bordered={false}>
          <div className={pStyle.componentsDescListGroup}>
            <div className={classnames(pStyle.componentsDescList)}>
              <Row>
                <Col xs={24} md={6} sm={12}>
                  <div className={pStyle.term}>通讯录联系人数</div>
                  <div className={pStyle.detail}>83</div>
                </Col>
                <Col xs={24} md={6} sm={12}>
                  <div className={pStyle.term}>手机号数量</div>
                  <div className={pStyle.detail}>83</div>
                </Col>
                <Col xs={24} md={6} sm={12}>
                  <div className={pStyle.term}>本人号码</div>
                  <div className={pStyle.detail}>13860582875</div>
                </Col>
                <Col xs={24} md={6} sm={12}>
                  <div className={pStyle.term}>本人号码姓名</div>
                  <div className={pStyle.detail}>陈美珠</div>
                </Col>

              </Row>
            </div>
          </div>

          <div className={pStyle.componentsDescListGroup}>
            <Row>
              <Col xs={24} sm={16}>
                <h4 className={pStyle.componentsDescListGroupTitle}>通讯录</h4>
              </Col>
              <Col xs={24} sm={8} style={{textAlign: "right"}}>
                <Search style={{marginBottom: 16, width: 280}} placeholder="输入手机号搜索"/>
              </Col>
            </Row>

            <Table rowKey={"id"} bordered={true} dataSource={books} columns={column}/>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}
