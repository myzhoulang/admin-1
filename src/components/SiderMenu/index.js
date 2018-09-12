import React, {Component} from 'react';

import SliderBar from './SliderBar';

class SiderMenu extends Component{
  render () {
    return (
      <SliderBar {...this.props} />
    )
  }
}

export default SiderMenu;