import React, {Component} from "react";
import {Button, Dropdown, Menu, Icon, Row, Col, Badge, Tabs, Card} from "antd";
import {observable, action} from "mobx";
import {observer} from "mobx-react";


import pStyle from '../../index.module.less';
import MainContent from "../../layouts/MainContent";

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

@observer
export default class Orders extends Component {
  @observable activeKey = 'BaseInfo';

  @action.bound
  setTabsActiveKey (key) {
    this.activeKey = key;
  }

  tabChange = (key) => {
    this.setTabsActiveKey(key);
  }

  render () {
    const style = {
      borderRadius: 4,
      display: 'block',
      height: 28,
      width: 28
    };
    const logo = <img src={require('../../assets/images/webpack.png')} style={style}/>;
    const menu = <Menu>
      <Menu.Item key="1">操作三</Menu.Item>
      <Menu.Item key="2">操作四</Menu.Item>
      <Menu.Item key="3">操作五</Menu.Item>
    </Menu>;
    const action = <React.Fragment>
      <ButtonGroup>
        <Button>操作一</Button>
        <Button>操作二</Button>
        <Dropdown overlay={menu}>
          <Button><Icon type={'ellipsis'}/></Button>
        </Dropdown>
      </ButtonGroup>
      <Button style={{marginLeft: 8}} type={'primary'}>主操作</Button>
    </React.Fragment>;
    const content = <div className={pStyle.componentsDescList}>
      <Row gutter={24}>
        <Col sm={12} md={8} xs={24}>
          <div className={pStyle.term}>用户姓名</div>
          <div className={pStyle.detail}>大刘1</div>
        </Col>

        <Col sm={12} md={8} xs={24}>
          <div className={pStyle.term}>产品名称</div>
          <div className={pStyle.detail}>中信捡个土豆</div>
        </Col>

        <Col sm={12} md={8} xs={24}>
          <div className={pStyle.term}>节点名称</div>
          <div className={pStyle.detail}>捡个土豆</div>
        </Col>

        <Col sm={12} md={8} xs={24}>
          <div className={pStyle.term}>订单状态</div>
          <div className={pStyle.detail}><Badge status="success"/>已通过</div>
        </Col>

        <Col sm={12} md={8} xs={24}>
          <div className={pStyle.term}>创建时间</div>
          <div className={pStyle.detail}>2018-09-20 12:36:12</div>
        </Col>
      </Row>
    </div>;
    const extraContent = <React.Fragment>
      <Row style={{textAlign: 'right'}}>
        <Col sm={12} xs={24}>
          <div style={{color: "rgba(0,0,0,.45)"}}>状态</div>
          <div style={{color: "rgba(0,0,0,.85)", fontSize: 20}}>待审批</div>
        </Col>
        <Col sm={12} xs={24}>
          <div style={{color: "rgba(0,0,0,.45)"}}>订单金额</div>
          <div style={{color: "rgba(0,0,0,.85)", fontSize: 20}}>￥ 5985.00</div>
        </Col>
      </Row>
    </React.Fragment>;
    const tabBarExtraContent = null;
    const baseInfo = <Card title="Card title" bordered={false}>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </Card>;
    const MailList = <Card title="Card title" bordered={false}>
      <p>2</p>
      <p>2</p>
      <p>3</p>
    </Card>;

    const ThirdPartyData = <Card title="Card title" bordered={false}>
      <p>3</p>
      <p>3</p>
      <p>3</p>
    </Card>;

    const HistrotyEntry = <Card title="Card title" bordered={false}>
      <p>4</p>
      <p>4</p>
      <p>4</p>
    </Card>;

    const tabList = [
      {tab: '基本信息', key: 'BaseInfo', component: baseInfo},
      {tab: '通讯录', key: 'MailList', component: MailList},
      {tab: '第三方数据', key: 'ThirdPartyData', component: ThirdPartyData},
      {tab: '历史进件', key: 'HistrotyEntry', component: HistrotyEntry},
    ];

    const tab = tabList.find((item) => item.key === this.activeKey) || {};
    const component = tab.component;
    return (
      <MainContent
        title={'单号: bb75fd84-af35-4aa7-9f98-03af81fe1473'}
        action={action}
        logo={logo}
        content={content}
        tabList={tabList}
        tabActiveKey={this.activeKey}
        extraContent={extraContent}
        onChangeTab={this.tabChange}
        tabBarExtraContent={tabBarExtraContent}>

        <div>
          {component}
        </div>

      </MainContent>
    )
  }
}
