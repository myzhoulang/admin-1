import React, {Component} from "react";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import {Tabs, Input, Icon, Button, Form, Row, Col, Checkbox} from "antd";

import "./index.less";
import pStyle from '../../index.module.less';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

@observer
class LoginForm extends Component {
  // 当前显示的登录方式
  @observable activeTab = "userName";

  // 倒计时
  @observable count = 0;

  // 设置当前显示的登录方式
  @action.bound
  setActiveTab(tab) {
    this.activeTab = tab
  }

  // 设置倒计时时间
  @action.bound
  setCount(count) {
    this.count = count;
  }

  // 点击登录的处理方法
  login = (e) => {
    console.log(this)
    e.preventDefault();
    const file = {
      userName: ["email", "password"],
      phone: ["phone", "captcha"]
    }
    this.props.form.validateFields(file[this.activeTab], (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.history.push("/")
      }
    });
  }

  // 点击获取验证码倒计时处理
  // 在120s 倒计时之内不能再次获取
  getCaptch = () => {
    this.props.form.validateFields(["phone"], (err) => {
      if (!err) {
        this.setCount(120);
        const fn = () => {
          runInAction(() => this.count--);
          if (this.count > 0) {
            setTimeout(fn, 1000);
          }
        }
        fn();
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Row id="login">
        <Col md={10} lg={8} className="img-holder">
          <div className='info-holder'>
            <h3 className='title'>孚临风控中心商户端</h3>
            <p className='desc'>努力让孚临风控中心成为全世界最牛B的风控平台。。</p>
            <img src={ require("../../assets/svg/graphic.svg") } alt="孚临风控中心商户端"/>
          </div>
        </Col>

        <Col md={14} lg={16} className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
              <Form style={{width: "95%"}} onSubmit={this.login}>
                <Tabs defaultActiveKey={this.activeTab} animated={false} onChange={this.setActiveTab}>
                  <TabPane tab="账户密码登录" key="userName">
                    <FormItem>
                      {getFieldDecorator("email", {
                        rules: [{required: true, message: "请输入您的邮箱账号!"}],
                      })(
                        <Input size="large" prefix={<Icon type="user"/>}
                               placeholder="E-mail Address"/>
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator("password", {
                        rules: [{required: true, message: "请输入您的密码!"}],
                      })(
                        <Input size="large" type="password" prefix={<Icon type="lock"/>}
                               placeholder="Password"/>
                      )}
                    </FormItem>
                  </TabPane>

                  <TabPane tab="手机号登陆" key="phone">
                    <FormItem>
                      {getFieldDecorator("phone", {
                        rules: [{required: true, message: "请输入您的手机号!"}],
                      })(
                        <Input size="large" prefix={<Icon type="mobile"/>} placeholder="Mobile Number"/>
                      )}
                    </FormItem>

                    <FormItem>
                      <Row gutter={8}>
                        <Col span={16}>
                          {getFieldDecorator("captcha", {
                            rules: [{required: true, message: "请输入验证码!"}],
                          })(
                            <Input size="large" prefix={<Icon type="mail" theme="outlined"/>} placeholder="Captch"/>
                          )}
                        </Col>
                        <Col span={8}>
                          {this.second}
                          <Button onClick={this.getCaptch} disabled={this.count} className={pStyle.btnBlock}
                                  size="large">{this.count ? `${this.count} s` : "获取验证码"}</Button>
                        </Col>
                      </Row>
                    </FormItem>
                  </TabPane>

                  {/*<TabPane tab="账号注册" key="3">Content of Tab Pane 2</TabPane>*/}
                </Tabs>

                <FormItem>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true,
                  })(
                    <Checkbox>自动登陆</Checkbox>
                  )}
                  <a className="login-form-forgot" style={{float: "right"}} href="">忘记密码</a>
                  <Button size="large" type="primary" htmlType="submit" className={pStyle.btnBlock}>
                    登陆
                  </Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;