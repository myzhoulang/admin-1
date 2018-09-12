import React, {Component} from "react";
import {Icon, Tabs, Popover, List, Avatar} from "antd";

import './index.css';

const TabPane = Tabs.TabPane;

export default class Notice extends Component {

	render() {
		const data = [
			{
				avatar: require('../../assets/images/message.png'),
				title: '您收到14份简历',
				desc: 'a years ago'
			},
			{
				avatar: require('../../assets/images/dingding.png'),
				title: 'Ant Design Title 2',
				desc: 'a years ago'
			},
			{
				avatar: require('../../assets/images/plus.png'),
				title: 'Ant Design Title 3',
				desc: 'a years ago'
			},
			{
				avatar: require('../../assets/images/star.png'),
				title: 'Ant Design Title 4',
				desc: 'a years ago'
			},
		];

		const tab1 = (
			<List
				footer={<div className={'components-notice-index-notice-list-clear'}>清空通知</div>}
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar}/>}
							title={<a href="https://ant.design">{item.title}</a>}
							description={item.desc}
						/>
					</List.Item>
				)}
			/>
		);
		const noticeContent = (
			<div className={'components-notice-index-popover'}>
				<Tabs defaultActiveKey="1">
					<TabPane tab="通知(2)" key="1">{tab1}</TabPane>
					<TabPane tab="消息(3)" key="2">{tab1}</TabPane>
					<TabPane tab="待办(4)" key="3">{tab1}</TabPane>
				</Tabs>
			</div>
		);
		return (
			<Popover placement="topLeft" popupClassName={'notice-index-popover-inner-content'} content={noticeContent}
			         trigger="click">
				<a href="/" className="global-header-index-action">
					<Icon type="bell"></Icon>
				</a>
			</Popover>
		)

	}
}