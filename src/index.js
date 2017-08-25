import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Home from './Home';
import Addrecipe from './Addrecipe';
import Aboutus from './Aboutus';
import Register from './Register';
import Login from './Login';
import Viewprofile from './Viewprofile';

import reducer from './reducers';

import { logUser } from './actions';

import { firebaseApp } from './Firebase';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import { NavLink } from 'react-router-dom';

import {
  BrowserRouter as Router,
   // for server rendering
  Route,

  // etc.
} from 'react-router-dom';


import createBrowserHistory from 'history/createBrowserHistory';
//next line to be removed

const history = createBrowserHistory();
//next line to be removed

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in',user);
    //const { email } = user;
    //store.dispatch(logUser(email));

    //change this to - this.props.history.push('/');
    history.push('/Addrecipe');
    //window.location = '/Addrecipe.js';
    //$location.path('/Addrecipe');
    //this.push('/Addrecipe');
    //this.navigate('/Addrecipe');
     
  }
  else
  {

   console.log('user has signed out or needs to sign in'); 
   //change this to - this.props.history.replace('/Login');
   history.replace('/Login');

  }
})

ReactDOM.render(
  <Provider store={store}>
     <Router history={history} >
     	<div className="container">
     			<Navbar inverse collapseOnSelect>
              <Navbar.Header>
                      <Navbar.Brand>
                          <NavLink to="/">Loves To Eat</NavLink>
                      </Navbar.Brand>
                      <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav pullRight>
                      <LinkContainer exact activeClassName="activeNav" to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/Aboutus"><NavItem eventKey={2}>About us</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/Register"><NavItem eventKey={3}>Sign up</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/Login"><NavItem eventKey={4}>Login</NavItem></LinkContainer>
                    
                    
                      <NavDropdown eventKey={5} title="Recipes" id="basic-nav-dropdown">
                         
                         <MenuItem divider /> 

                        <LinkContainer to="/Addrecipe">
                          <MenuItem eventKey={5.1}>Add a recipe</MenuItem>
                        </LinkContainer> 

                          
                       
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
    			</Navbar>
         
  		      <Route exact path="/" component={Home} history={history} />
  		      <Route path="/Aboutus" component={Aboutus} />
  		      <Route path="/Addrecipe" component={Addrecipe} history={history} />
  		      <Route path="/Register" component={Register} />
  		      <Route path="/Login" component={Login} history={history} />
  		      <Route path="/Viewprofile" component={Viewprofile} />

  	</div>
    </Router>
  </Provider>, document.getElementById('root')
);

