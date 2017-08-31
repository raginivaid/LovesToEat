import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getUser,logout } from './Actions/UserActions';


class Viewprofile extends Component {
	componentWillMount() {
    
    this.props.getUser();
    if (this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loading === false && nextProps.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

	
    render(){
        return(
        	<div className="container">
        		<div className="row">

	        		 <div className="col-sm-6 col-md-10">
	        			
				            <h2 style={{color: 'green',margin:'2% 5% 10% 45%'}}>WELCOME</h2>
				             

				    </div>

	        		<div className="col-sm-6 col-md-2">
	        			
	        			 <button style={{margin:'2% 0% 2% 0%'}} className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign Out</button>
				              
				    </div>
			    </div>

			   

			    <div className="col-sm-6 col-md-4">
			        
			            <h3>About Us</h3>
			        	   <i className="fa fa-file-text fa-5x" aria-hidden="true"></i><br /><br />
			            <button className="btn btn-primary"><Link style={{color:'white'}} to={'/Aboutus'}>About Us</Link></button>
			        
			    </div>

			    <div className="col-sm-6 col-md-4">
			        
			            <h3>Add recipe?</h3>
			               <i className="fa fa-cutlery fa-5x" aria-hidden="true"></i><br /><br />
			            <button className="btn btn-primary"><Link style={{color:'white'}} to={'/Addrecipe'}>Add recipe</Link></button>
			        
			    </div>


			    <div className="col-sm-6 col-md-4">

			             <h3>View recipes?</h3>
			            <i className="fa fa-eye fa-5x" aria-hidden="true"></i><br /><br />
			            <button className="btn btn-primary"><Link style={{color:'white'}} to={'Home'}>View recipes</Link></button>
			        
			    </div>  
		        
	        </div> 
        );
    }
}


let form = reduxForm({
  form: 'CreateAccount'
})(Viewprofile);

form = connect((state, ownProps) => ({
    user: state.user
  }), { getUser, logout }
)(form);

export default form;