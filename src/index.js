import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Home from './Home';
import Addrecipe from './Addrecipe';
import Aboutus from './Aboutus';
import Login from './Containers/Login';
import Viewprofile from './Viewprofile';
import CreateAccount from './Containers/CreateAccount';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import reducers from './Reducers/index';

import { Provider } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

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


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <Router history={history} >
        <div className="container">
                <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                      <Navbar.Brand>
                          <NavLink to="/">Loves To Eat</NavLink>
                      </Navbar.Brand>
                      <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse style={{margin:'0% 6% 0% 6%'}}>
                  <Nav pullRight>


                      <LinkContainer exact activeClassName="activeNav" to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/Aboutus"><NavItem eventKey={2}>About us</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/CreateAccount"><NavItem eventKey={3}>Sign up</NavItem></LinkContainer>
                      <LinkContainer activeClassName="activeNav" to="/Login"><NavItem eventKey={4}>Login</NavItem></LinkContainer>
                    
                    
                     
                  </Nav>
              </Navbar.Collapse>
                </Navbar>
         
              <Route exact path="/" component={Home} />
              <Route path="/Aboutus" component={Aboutus} />
              <Route path="/Addrecipe" component={Addrecipe} history={history} />
              <Route path="/CreateAccount" component={CreateAccount} />
              <Route path="/Login" component={Login}  />
              <Route path="/Viewprofile" component={Viewprofile} />

              
               <footer></footer>

    </div>
    </Router>
  </Provider>, document.getElementById('root')
);

