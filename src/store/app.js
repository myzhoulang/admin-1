import {observable, computed, action, configure} from 'mobx';

configure({enforceActions: 'always'})


class AppStore {
  @observable siderMenuCollapsed = false;

  @action.bound toggleSiderMenuCollapsed () {
    this.siderMenuCollapsed = !this.siderMenuCollapsed
  }
}

export default  new AppStore();