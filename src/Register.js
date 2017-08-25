import React, { Component } from 'react';
import { firebaseApp } from './Firebase';
import { Link } from 'react-router-dom';


class Register extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
		this.signUp = this.signUp.bind(this);
	}

	signUp()
	{
		console.log('this.state',this.state);
		const { email, password} = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		  .catch(error => {
			this.setState({error})
		})

		//this.props.history.replace('/Login');
	}

	render(){
		return(
			
			<div className="form-inline" style={{margin:'5%'}}>
				<h1>Register</h1>
				<div className="form-group">
					<input className="form-control"
					 type="text"
					 placeholder="email" 
					 onChange={event => this.setState({email: event.target.value})}
					 /><br /><br />
					 <input className="form-control"
					 type="password"
					 placeholder="password" 
					 onChange={event => this.setState({password: event.target.value})}
					 /><br /><br />
					 <button className="btn btn-primary"
					 type="button" 
					 onClick={() => this.signUp()}>
					 Sign up
					 </button>
				</div>

				<div className="errormessage">{this.state.error.message}
				</div>

				<div><Link to={'/Login'}>Already a member? Login here!</Link>
				</div>

			</div>
			);
	}
}

export default Register;