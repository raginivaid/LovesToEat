import React, { Component } from 'react';
import IngredientList from './IngredientList';
import { connect } from 'react-redux';
import { firebaseApp } from './Firebase';

class Home extends Component {


	constructor(props) {
		super(props);

		this.state= {
			recipes: JSON.parse(localStorage.getItem('recipes')) || []
		};
	}

	signOut()
	{
		firebaseApp.auth().signOut();
	}

	displayRecipes()
	{
		let resultsArray = [];

		this.state.recipes.map((recipe,i) => {
			resultsArray.push(
				<div className="col-sm-6 col-md-4">
					<div className="thumbnail">
					 	<img src={recipe.image} alt={recipe.name} />
					 	<div className="caption">

					        <h3>{recipe.name}</h3>
					        <h5><strong>Description:</strong></h5>
					        <p>{recipe.description}</p>
					        <h5><strong>Instructions:</strong></h5>
					        <p>{recipe.instruction}</p>
					    	<IngredientList recipe={recipe} />
					    </div>
					</div>
				</div>
				);
		});
		return resultsArray;
	}



	render(){
		return(
			<div className="container">
				<div className="row">
					<h1>Home</h1>
					{this.displayRecipes()}	
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	console.log('state',state);
	return {}
}

export default connect(mapStateToProps, null)(Home);