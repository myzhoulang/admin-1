import React, {Component} from "react";
import {Card, Col, Row} from "antd";
import pStyle from "../../index.module.less";

export default class ThirdPartyData extends Component {

  render () {
    const datas = [
      {
        id: 0,
        title: '多头数据信息',
        data: {
            "贷款机构数": 2,
            "贷款机构（近3个月）": 12,
            "贷款机构（近12个月）": 12,
            "历史逾期机构数": 23,
            "历史逾期（近12个月）": 12,
            "最近逾期时间": "2018-02-05 12:12:12",
            "当前逾期": "2018-09-20 15:35:56",
            "贷款逾期订单数（M0+）": 12
          }
      }
    ]
    return (
      <React.Fragment>

        {datas.map(data => {
          return (<Card key={data.id} title={data.title} bordered={false} style={{marginBottom: 24}}>
            <div className={pStyle.componentsDescList}>
              <Row>
                {Object.keys(data.data).map((key) => {
                  return (
                    <Col key={key} xs={24} md={8} sm={12} lg={6}>
                      <div className={pStyle.term}>{key}</div>
                      <div className={pStyle.detail}>{data.data[key]}</div>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Card>)
        })}
      </React.Fragment>
    );
  }
}
