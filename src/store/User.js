import {observable, action} from "mobx";

class User {
	@observable users = [];

	@action.bound
	getUsers() {
		return fetch("/api/users", {method: "get", headers: {"Content-Type": "application/json"}})
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
}

export default new User();

