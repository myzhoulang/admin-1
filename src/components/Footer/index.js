import React, {Component} from "react";
import {Layout} from "antd";

const {Footer} = Layout;

export default class FooterView extends Component {
  render () {
    return (
      <Footer style={{textAlign: 'center'}}>
        <p>Copyright©2014-2018 浙江孚临科技有限公司 版权所有</p>
        <p>商务合作：bd@fulintechfin.com  客服电话：0571-28874257#803</p>
      </Footer>
    )
  }
}
