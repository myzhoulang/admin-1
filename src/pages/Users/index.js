import React, {Component} from "react";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import {Table, Card, Form, Row, Col, Input, Select, Button, Icon, DatePicker, Alert, Spin, Modal} from 'antd';
import {Link} from "react-router-dom";

import user from "../../store/User";
import "./index.less";
//
const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;

@observer
export default class List extends Component {
  @observable loading = false;
  @observable confirmLoading = false;

  @action.bound
  load (status) {
    this.loading = status;
  }

  delete (user) {
    confirm({
      title: `确认删除${user.name}用户`,
      content: `删除后，用户将不在保存， 请谨慎操作`,
      onOk () {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      }
    })
  }

  componentDidMount () {
    this.load(true);
    user.getUsers().then((data) => {
      runInAction(() => {
        user.users = data.list;
        this.load(false);
      })
    })
  }

  render () {
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
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (user) => {
        return (
          <div>
            <Button icon={"edit"} type={"primary"}>
              <Link style={{color: '#fff'}} to={`/admin/users/${user.id}`}>编辑</Link>
            </Button>
            <Button style={{marginLeft: "15px"}} onClick={() => this.delete(user)} icon={"delete"} type={"danger"}>删除</Button>
          </div>
        );
      }
    }];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
      }),
    };

    return (
      <Card bordered={false}>
        <Form>
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label="规则名称" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Input placeholder="请输入规则名称"/>
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem label="规则名称" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Select
                  showSearch
                  style={{width: "100%"}}
                  placeholder="Select a person"
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem label="更新日期" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <DatePicker style={{width: "100%"}}/>
              </FormItem>

            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <FormItem label="调用次数" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Input placeholder="请输入选择"/>
              </FormItem>

            </Col>

            <Col span={8}>
              <FormItem label="使用状态" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Input placeholder="请输入选择"/>
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem label="使用状态" labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Input placeholder="请输入选择"/>
              </FormItem>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col style={{textAlign: "right"}}>
              <Button type="primary">查询</Button>
              <Button style={{marginLeft: "8px"}}>重置</Button>
            </Col>
          </Row>
        </Form>

        <div className="table-operations">
          <Button type="primary"><Link to={"/admin/users/"}><Icon type="plus" theme="outlined"/>新建</Link></Button>
          <Button type="primary" style={{marginLeft: "8px"}}><Icon type="file-excel" theme="outlined"/>导出</Button>
          {/*<Button onClick={this.clearAll}>Clear filters and sorters</Button>*/}
        </div>

        <Alert
          style={{marginBottom: "16px"}}
          message="Success Tips"
          description="Detailed description and advices about successful copywriting."
          type="info"
          showIcon
        />
        <Spin spinning={this.loading}>
          <Table rowSelection={rowSelection} dataSource={user.users} rowKey="id" columns={columns}/>
        </Spin>
      </Card>
    )
  }
}
