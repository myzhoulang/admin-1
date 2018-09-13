import React, {Component} from "react";
import {Card, Row, Col, Form, Input, Radio, Select, Checkbox} from "antd";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import UserForm from "./UserForm"
import UserBx from "../../store/User"

@observer
export default class User extends Component {
  @observable user = {};

  @action.bound
  getUser (id) {
    UserBx.getUser(id).then(data => {
      runInAction(() => {
        this.user = data.user
      })
    })
  }

  componentDidMount () {
    this.getUser(1)
  }

  render () {
    return (
      <Card>
        <UserForm user = {this.user} />
      </Card>
    )
  }
}
