import {observable, action} from "mobx";

class User {
  @observable users = [];

  @action.bound
  getUsers () {
    return fetch("/api/users", {
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
    return fetch(`/api/users/${id}`, {
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

