import {observable, action} from "mobx";

class User {
  @observable users = [];

  @action.bound
  getUsers () {
    return fetch("http://47.98.62.21:3008/api/users", {
      method: "get",
      headers: {"Content-Type": "application/json"}
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return {
            list: []
          }
        }
      })
  }

  @action.bound
  getUser (id) {
    return fetch(`http://47.98.62.21:3008/api/users/${id}`, {
      method: "get",
      headers: {"Content-Type": "application/json"}
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return {}
        }
      })
  }
}

export default new User();

