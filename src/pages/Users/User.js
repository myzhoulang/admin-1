import React, {Component} from "react";
import {Card, Spin} from "antd";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import UserForm from "./UserForm"
import UserBx from "../../store/User"

@observer
export default class User extends Component {

  @observable user = {};
  @observable loadding = true;

  @action.bound
  setUser (user) {
    this.user = user;
  }

  @action.bound
  setLoadding (status) {
    this.loadding = status;
  }

  getUser (id) {
    return UserBx.getUser(id)
  }

  async componentDidMount () {
    const {match} = this.props
    const {user} = await this.getUser(match.params.id);
    this.setUser(user);
    this.setLoadding(false);
  }

  render () {
    return (
      <Card>
        <Spin spinning={this.loadding}>
          <UserForm user = {this.user} />
        </Spin>
      </Card>
    )
  }
}
