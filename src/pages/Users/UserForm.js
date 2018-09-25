import React, {Component} from "react";
import {Checkbox, Form, Input, Radio, Select, Button} from "antd";
import {withRouter} from "react-router-dom";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import PropTypes from 'prop-types'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

@observer
class UserForm extends Component {
  @observable loading = false;

  @action setLoading (status) {
    this.loading = status;
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object
  }

  componentWillMount () {
    console.log(this.props)
  }

  Submit = (e) => {
    e.preventDefault();
    this.setLoading(true);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        setTimeout(() => {
          runInAction(() => {
            this.setLoading(false)
          })
        }, 2000)
      }
    });
  }

  render () {

    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    const roles = [
      {name: "系统管理员", id: 0},
      {name: "开发人员", id: 1},
      {name: "运营团队", id: 2},
      {name: "风控团队", id: 3},
      {name: "体验角色", id: 4}
    ];
    const {getFieldDecorator} = this.props.form;
    return (<Form onSubmit={this.Submit} style={{margin: "8px 0"}}>
      <FormItem
        {...formItemLayout}
        label="姓名"
      >
        {getFieldDecorator('name', {
          rules: [{required: true, message: '请输入姓名!'}],
        })(
          <Input placeholder="请输入姓名"/>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="邮箱"
      >
        {getFieldDecorator('email', {
          rules: [{required: true, message: '请输入邮箱!'}],
        })(
          <Input placeholder="请输入邮箱"/>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="手机号"
      >
        {getFieldDecorator('phone', {
          rules: [{required: true, message: '请输入手机号!'}],
        })(
          <Input placeholder="请输入手机号"/>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="性别"
      >
        {getFieldDecorator('sex', {
          rules: [{required: true}]
        })(
          <RadioGroup>
            <Radio value={1}>男</Radio>
            <Radio value={0}>女</Radio>
          </RadioGroup>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="工号"
      >
        {getFieldDecorator('no', {
          rules: [{required: true, message: '请输入工号!'}],
        })(
          <Input placeholder="请输入工号"/>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="部门"
      >
        {getFieldDecorator('department', {
          rules: [{required: true, message: '请选择所在部门!'}]
        })(
          <Select style={{width: 160}}>
            <Option value={0}>技术部</Option>
            <Option value={1}>运营部</Option>
            <Option value={2}>算法部</Option>
            <Option value={3}>风控部</Option>
            <Option value={4}>人事部</Option>
          </Select>
        )}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="角色"
      >
        {getFieldDecorator('roles', {
          rules: [{required: true, message: '请选择角色!'}]
        })(
          <Checkbox.Group>
            {roles.map(item => (
              <Checkbox key={item.id} value={item.id}>{item.name}</Checkbox>
            ))}
          </Checkbox.Group>
        )}
      </FormItem>

      <FormItem
        wrapperCol={{span: 12, offset: 6}}
      >
        <Button loading={this.loading} type="primary" htmlType="submit">Submit</Button>
        <Button type="primary" style={{marginLeft: 15}} onClick={this.props.history.goBack}>Back</Button>
      </FormItem>
    </Form>)
  }
}

export default Form.create({
  mapPropsToFields (props) {
    const {user} = props
    return {
      name: Form.createFormField({
        value: user.name
      }),
      email: Form.createFormField({
        value: user.email
      }),
      phone: Form.createFormField({
        value: user.phone
      }),
      sex: Form.createFormField({
        value: user.sex || 1
      }),
      no: Form.createFormField({
        value: user.no
      }),
      department: Form.createFormField({
        value: user.department || 0
      }),
      roles:Form.createFormField({
        value: user.roles
      })
    }
  }
})(withRouter(UserForm));
