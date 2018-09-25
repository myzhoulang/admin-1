import React, {Component} from "react";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import {Table, Card, Form, Row, Col, Input, Select, Button, Icon, Divider, Alert, Spin, Modal} from 'antd';
import {Link} from "react-router-dom";

import MainContent from "../../layouts/MainContent"
import user from "../../store/User";
//
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const confirm = Modal.confirm;

@observer
export default class List extends Component {
  @observable loading = false;
  @observable confirmLoading = false;
  @observable selectedUsers = [];

  @computed get getSelectedCalls() {
    return this.selectedUsers.reduce((pre, cur) => pre + cur.call, 0)
  }

  @action.bound
  selectUsers(users) {
    this.selectedUsers = users
  }

  @action.bound
  load(status) {
    this.loading = status;
  }

  // 删除用户
  delete(user = {}) {
    confirm({
      title: `确认删除${user.name}用户`,
      content: `删除后，用户将不在保存， 请谨慎操作`,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      }
    })
  }

  componentDidMount() {
    this.load(true);
    user.getUsers().then((data) => {
      runInAction(() => {
        user.users = data.list;
        this.load(false);
      })
    })
  }

  onSelectChange(selectUsers) {
    this.selectUsers(selectUsers)
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      filters: [
        {text: '钱超', value: '钱超'},
        {text: '邓磊', value: '邓磊'},
      ],
      onFilter: (value, record) => record.name.includes(value),
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 200
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: '调用次数(次)',
      dataIndex: 'call',
      key: 'call',
      sorter: (a, b) => a.call - b.call
    }, {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (user) => {
        return (
          <div>
            {/*<Button icon={"edit"} type={"primary"}>*/}
            <Link to={`/admin/orders/${user.id}`}>编辑</Link>
            {/*</Button>*/}
            {/*<Button style={{marginLeft: "15px"}} onClick={() => this.delete(user)} icon={"delete"}*/}
                    {/*type={"danger"}>删除</Button>*/}
            <Divider type="vertical" />
            <a href={"/"}>删除</a>
          </div>
        );
      }
    }];

    const rowSelection = {
      onChange: (selectedKeys, selectedUsers) => this.onSelectChange(selectedUsers),
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
      }),
    };

    return (
      <MainContent title={"订单管理"} content={"商户的订单都在处理"}>
        <Card bordered={false}>
          <Form>
            <Row gutter={18}>
              <Col xs={24} sm={7} md={8} xxl={6}>
                <FormItem label="模型名称" labelCol={{span: 7}} wrapperCol={{span: 16}}>
                  <Select
                    showSearch
                    style={{width: "100%"}}
                    placeholder="请选择模型名称">
                    <Option value="jack">不限</Option>
                    <Option value="lucy">灵芝分</Option>
                    <Option value="tom">模型1</Option>
                  </Select>
                </FormItem>
              </Col>

              <Col xs={24} sm={11} md={10} xxl={6}>
                <FormItem label="规则名称" labelCol={{span: 6}} wrapperCol={{span: 18}}>
                  <InputGroup compact>
                    <Select defaultValue="name" style={{width: 90}}>
                      <Option value="name">姓名</Option>
                      <Option value="idCard">身份证</Option>
                      <Option value="mobile">手机号</Option>
                    </Select>
                    <Input style={{width: "calc(100% - 90px)"}} placeholder={"请输入搜索内容"} />
                  </InputGroup>
                </FormItem>
              </Col>

              <Col xs={24} sm={8} md={6} xxl={12}>
                <FormItem labelCol={{span: 0}} wrapperCol={{span: 24}}>
                  <Button type="primary">查询</Button>
                  <Button style={{marginLeft: "8px"}}>重置</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>

          <div className={'table-operations'}>
            <Button type="primary" style={{marginLeft: "8px"}}><Icon type="file-excel" theme="outlined"/>导出</Button>
            <Button type="primary" style={{marginLeft: "8px"}}><Icon type="printer" theme="outlined"/>打印</Button>
          </div>

          <Alert
            style={{marginBottom: "16px"}}
            message={`已选择 ${this.selectedUsers.length} 项, 共调用 ${this.getSelectedCalls} 次`}
            description=""
            type="info"
            showIcon
          />
          <Spin spinning={this.loading}>
            <Table size="middle" rowSelection={rowSelection} dataSource={user.users} rowKey="id" columns={columns}/>
          </Spin>
        </Card>
      </MainContent>
    )
  }
}
