import {observable, action, runInAction} from "mobx";

class User {
  @observable users = [];

  @action.bound getUsers () {
    return fetch("/api/users", {method: "get", headers: {"Content-Type": "application/json"}})
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
  }
}

export default new User();

