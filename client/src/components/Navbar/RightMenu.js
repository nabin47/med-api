import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal" className='nav-item'>
        <Menu.Item key="app">
          <UserOutlined />
          <a href="">Signin</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;