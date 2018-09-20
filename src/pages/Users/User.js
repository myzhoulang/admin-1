import React, {Component} from "react";
import {Card, Spin} from "antd";
import {observable, action} from "mobx";
import {observer} from "mobx-react";

import MainContent from "../../layouts/MainContent";
import UserForm from "./UserForm";
import UserBx from "../../store/User";

@observer
export default class User extends Component {

  @observable user = {};
  @observable loadding = false;

  @action.bound
  setUser (user) {
    this.user = user;
  }

  @action.bound
  setLoadding (status) {
    this.loadding = status;
  }

  /**
   * 获取用户详情
   * @param id
   * @returns {Promise}
   */
  getUser (id) {
    return UserBx.getUser(id);
  }

  async componentDidMount () {
    const {match} = this.props;
    const {params} = match;
    const id = Number(params.id);
    if (Number.isInteger(id)) {
      this.setLoadding(true);
      const {user} = await this.getUser(match.params.id);
      this.setUser(user);
      this.setLoadding(false);
    }
  }

  render () {
    return (
      <MainContent>
        <Card>
          <Spin spinning={this.loadding}>
            <UserForm user={this.user}/>
          </Spin>
        </Card>
      </MainContent>
    )
  }
}
