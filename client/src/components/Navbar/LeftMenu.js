import React, { Component } from 'react';
import { Menu } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal" className='nav-item'>
        <Menu.Item key="alipay">
          <a href="">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;