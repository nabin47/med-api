import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { MedicineBoxTwoTone } from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../UserContext';
import './NavBar.css';

function Navigate(){
  window.localStorage.clear();
  window.location.replace('../../');
 return false;
}

function NavBar() {
  const {user, setUser} = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className='nav-body'>
      <Container>
        <Navbar.Brand>
          <div className="logo">
             <MedicineBoxTwoTone />
             <Link to='/'>Med-Api</Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to='/pages/About/About'>About Us</Link>
            </Nav.Link>
          </Nav>
            {user ? (
              <Nav>
              <Nav.Link >
                <Link to='/pages/DataTable/userDetails'>Data Table</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to='/pages/Login/Login' onClick={Navigate}>Sign out</Link>
              </Nav.Link>
              </Nav>
            ) : (
              <Nav>
              <Nav.Link >
                <Link to='/pages/Login/Login'>Signin</Link>
              </Nav.Link>
              </Nav>
            )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;