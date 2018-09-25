import {observable, action, configure} from 'mobx';

configure({enforceActions: 'always'});


class AppStore {
  @observable siderMenuCollapsed = false;

  @action.bound toggleSiderMenuCollapsed (status) {
    if (typeof status === 'boolean') {
      this.siderMenuCollapsed = status;
    } else {
      this.siderMenuCollapsed = !this.siderMenuCollapsed;
    }
  }
}

export default new AppStore();