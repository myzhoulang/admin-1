import React, {Component} from "react";
import {Button, Card, Col, Row, Table} from "antd";
import pStyle from "../../index.module.less";
import {Link} from "react-router-dom";

export default class BaseInfo extends Component{
  render () {
    // TODO 模拟数据
    const basicData = {
      "姓名": "刘泽隆",
      "性别": "男",
      "身份证号": "360123199702080010",
      "手机号": "15879155087",
      "年龄": 21,
      "注册渠道": "",
      "注册子渠道": "",
      "地址（GPS）": "",
      "籍贯": "",
      "手机归属地": "",
      "IP归属地": "杭州",
      "Wi-Fi归属地": "",
      "设备品牌": "",
      "设备名称": "",
      "设备系统": "",
      "系统版本": "",
      "用户分层": "",
      "是否复贷": "",
      "芝麻分": "数据获取失败"
    };
    const contactsClo = [{
      title: '联系人关系',
      dataIndex: 'relation',
      key: 'relation'
    }, {
      title: '联系人姓名',
      dataIndex: 'contact',
      key: 'contact'
    }, {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '累计通话次数',
      dataIndex: 'cntNum',
      key: 'cntNum'
    }, {
      title: '通话排名',
      dataIndex: 'cntRank',
      key: 'cntRank',
      sorter: (a, b) => a.cntRank - b.cntRank
    }];

    const contactsData = [
      {
        id: 0,
        cntNum: 56,
        cntRank: 1,
        contact: "abc",
        phone: "17826879859",
        relation: "121"
      },
      {
        id: 1,
        cntNum: 56,
        cntRank: 2,
        contact: "abc",
        phone: "17826879858",
        relation: "121"
      }
    ]
    return (
      <React.Fragment>
        <Card title="基本信息" bordered={false} style={{marginBottom: 24}}>
          <div className={pStyle.componentsDescList}>
            <Row>
              {Object.keys(basicData).map((key) => {
                return (
                  <Col key={key} xs={24} md={8} sm={12} lg={6}>
                    <div className={pStyle.term}>{key}</div>
                    <div className={pStyle.detail}>{basicData[key]}</div>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Card>

        <Card title="联系人信息" bordered={false} style={{marginBottom: 24}}>
          <div>
            <Table rowKey={"id"} dataSource={contactsData} columns={contactsClo} />
          </div>
        </Card>
      </React.Fragment>
    )
  }
}
