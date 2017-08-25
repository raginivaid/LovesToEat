import React, { Component } from 'react';
import Cooking from './Cooking.mp4';

class Aboutus extends Component {
	render(){
		return(
			<div className="container">
				<h1 >About us</h1>
	          		<video className='videoTag' autoPlay loop muted>
					    <source src={Cooking} type='video/mp4' />
					</video>
			</div>
			);
	}
}

export default Aboutus;