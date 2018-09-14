import React, {Component} from "react";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import {Table, Card, Form, Row, Col, Input, Select, Button, Icon, DatePicker, Alert, Spin} from 'antd';

import user from "../../store/User";
import "./index.less";
//
const FormItem = Form.Item;
const Option = Select.Option;

@observer
export default class List extends Component {
  @observable loading = false;

  @action.bound
  load (status) {
    this.loading = status;
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
    }];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
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
          <Button type="primary"><Icon type="plus" theme="outlined"/>新建</Button>
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
