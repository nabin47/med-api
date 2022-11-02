import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { MedicineBoxTwoTone } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
        <nav className="menuBar">
          <div className="logo">
            <MedicineBoxTwoTone />
            <Link to='/'>Med-Api</Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu />
            </div>
          
</div>
        </nav>
    );
  }
}
export default Navbar;
