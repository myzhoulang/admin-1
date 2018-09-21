import React, {Component} from "react";
import {Card, Table, Badge} from "antd";

export default class HistrotyEntry extends Component {

  render () {
    const column = [
      {
        title: "订单号",
        dataIndex: "customerOrderId",
        key: "customerOrderId"
      },
      {
        title: "产品名称",
        dataIndex: "productName",
        key: "productName",
        width: "10%"
      },
      {
        title: "业务节点",
        dataIndex: "nodesName",
        key: "nodesName",
        width: "10%"
      },
      {
        title: "用户信息",
        dataIndex: "",
        key: "userName",
        width: "15%",
        render (order) {
          return (
            <p>
              {order.userName}<br/>
              {order.phone}<br/>
              {order.idCard}
            </p>
          )
        }
      },
      {
        title: "申请时间",
        dataIndex: "applyTime",
        key: "applyTime"
      },
      {
        title: "订单状态",
        dataIndex: "status",
        key: "status",
        width: "12%",
        filters: [
          {text: '待审核', value: 0},
          {text: '审核中', value: 1},
          {text: '已通过', value: 2},
          {text: '已拒绝', value: 3},
        ],
        onFilter: (value, record) => record.status === (value|0),
        render (text) {
          return (
            <p><Badge status={["default", "processing", "success", "error"][text]} />{["待审核", "审核中", "已通过", "已拒绝"][text || 0]}</p>
          )
        }
      },
      {
        title: "审核状态",
        dataIndex: "reviewStatus",
        width: "12%",
        key: "reviewStatus"
      },
      {
        width: "15%",
        align: "right",
        title: "失败原因",
        dataIndex: "failReason",
        key: "failReason"
      }
    ];
    const data = [{
      "id": 18768,
      "customerOrderId": "19180910074551007045",
      "productName": "借个芝麻",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 19:47:36",
      "status": 3,
      "reviewStatus": null,
      "failReason": "R75",
    }, {
      "id": 18767,
      "customerOrderId": "19180910073331007043",
      "productName": "借个芝麻",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 19:35:15",
      "status": 3,
      "reviewStatus": null,
      "failReason": "",
    }, {
      "id": 18766,
      "customerOrderId": "19180910060125007039",
      "productName": "借个芝麻",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 18:03:13",
      "status": 3,
      "reviewStatus": null,
      "failReason": "",
    }, {
      "id": 18765,
      "customerOrderId": "19180910055639007038",
      "productName": "借个芝麻",
      "nodeCode": "ND180381134048376273",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 17:58:22",
      "status": 1,
      "reviewStatus": null,
      "failReason": "MOXIE_CARRIER_SPEC MOXIE_CARRIER is not ready!"
    }, {
      "id": 18764,
      "customerOrderId": "19180910054607007037",
      "productName": "借个芝麻",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 17:55:48",
      "status": 2,
      "reviewStatus": null,
      "failReason": "MOXIE_CARRIER_SPEC MOXIE_CARRIER is not ready!"
    }, {
      "id": 18763,
      "customerOrderId": "19180910054607007037",
      "productName": "借个芝麻",
      "nodesName": "额度授信申请",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-10 17:47:53",
      "status": 2,
      "reviewStatus": null,
      "failReason": "MOXIE_CARRIER_SPEC MOXIE_CARRIER is not ready!"
    }, {
      "id": 18745,
      "customerOrderId": "TEST_0001",
      "productName": "借个芝麻",
      "nodesName": "提现决策",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-07 11:35:17",
      "status": 1,
      "reviewStatus": null,
      "failReason": ""
    }, {
      "id": 18742,
      "customerOrderId": "TEST_0001",
      "productName": "借个芝麻",
      "nodesName": "提现决策",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-07 11:07:47",
      "status": 1,
      "reviewStatus": null,
      "failReason": ""
    }, {
      "id": 18741,
      "productId": "33",
      "productName": "借个芝麻",
      "nodesName": "提现决策",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-07 11:06:10",
      "status": 2,
      "reviewStatus": null,
      "failReason": ""
    }, {
      "id": 18735,
      "customerOrderId": "TEST_0001",
      "productName": "借个芝麻",
      "nodesName": "提现决策",
      "userName": "王微",
      "phone": "18217250172",
      "idCard": "412326198807151657",
      "applyTime": "2018-09-07 10:41:30",
      "status": 3,
      "reviewStatus": null,
      "failReason": ""
    }];

    return (
      <React.Fragment>
        <Card bordered={false}>
          <Table rowKey={"id"} dataSource={data} columns={column}/>
        </Card>
      </React.Fragment>
    );
  }
}
