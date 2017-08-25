import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div class="App-name">
      </div>
    );
  }
}
/*
export class Header extends Component
{
  render()
  {
  return (
  <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/Home">Loves To Eat</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1}><NavLink to="/Home">Home</NavLink></NavItem>
                    <NavItem eventKey={2}><NavLink to="/Aboutus">About Us</NavLink></NavItem>
                    <NavItem eventKey={3} href="#">Sign Up</NavItem>
                    <NavItem eventKey={4} href="#">Login</NavItem>
                    <NavDropdown eventKey={5} title="Profile" id="basic-nav-dropdown">
                        <MenuItem eventKey={5.1}>View Profile</MenuItem>
                        <MenuItem eventKey={5.2}>Add a recipe</MenuItem>
                        <MenuItem eventKey={5.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={5.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
  </Navbar>
  );
  }
}*/
export default App;
