import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getUser } from './Actions/UserActions';
import { logout } from './Actions/UserActions';

class Viewprofile extends Component {
	
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


export default Viewprofile;