import React, {Component} from "react";
import {Card, Row, Col, Tooltip} from "antd";
import {observable, action} from "mobx";
import {observer} from "mobx-react";


import mocks from "../../mocks/point-bubble-mock.json";

import NumberInfo from '../../components/NumberInfo';
import BarChart from "../../components/Charts/BarChart";
import BubbleChart from "../../components/Charts/BubbleChart";
import Donut from "../../components/Charts/Donut";
import Line from "../../components/Charts/Line"

import './DashBoard.css';

@observer
export default class DashBoard extends Component {
  @observable data = mocks;
  @observable status = 'pedding';
  @action setStatus () {
    this.status = 'success'
  }

  componentDidMount () {
    setTimeout(() => {
      this.setStatus()
    }, 1000)
  }

  render () {
    return (
      <React.Fragment>
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24} style={{marginBottom: 24}}>
            <Card title="活动实时交易情况" bordered={false}>
              <Row>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo subTitle={'今日交易总额'} total={'124,543,233'} suffix={'元'}/>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo subTitle={'销售目标完成率'} total={'92%'}/>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo subTitle={'活动剩余时间'} total={'00:00:00'}/>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo subTitle={'每秒交易总额'} total={'234'} suffix={'元'}/>
                </Col>
              </Row>

              <div className='mapChart'>
                <Tooltip title="等待后期实现">
                  {this.status === 'success' && <BubbleChart height={480} data={this.data}/>}
                </Tooltip>
              </div>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card title="活动情况预测" style={{marginBottom: 24}} bordered={false}>
              {this.status === 'success' && <Donut/>}
            </Card>

            <Card title="分组柱状图" style={{marginBottom: 24}} bordered={false}>
              {this.status === 'success' && <Line/>}
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card title="活动实时交易情况" bordered={false}>
              {this.status === 'success' && <BarChart height={400}/>}
            </Card>
          </Col>
        </Row>
      </React.Fragment>




    )
  }
}
