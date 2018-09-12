import {observable, action, runInAction} from "mobx";

class User {
  @observable users = [];

  @action.bound getUsers () {
    fetch("/api/users", {method: "get", headers: {"Content-Type": "application/json"}})
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(users => {
        runInAction(() => {
          this.users = users.list
        })
      })
  }
}

export default new User();

