import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
class RightMenu extends Component {
  render() {
    function Navigate(){
         window.localStorage.clear();
         window.location.replace('./Login');
        return false;
    }
    return (
      //<Menu mode="horizontal" className='nav-item'>
        //<Menu.Item key="app">
        <div>
          
          <button className="btn btn-danger" onClick={ Navigate}>Log Out</button>
        </div>
        //</Menu.Item>
      //</Menu>
    );
  }
}
export default RightMenu;
