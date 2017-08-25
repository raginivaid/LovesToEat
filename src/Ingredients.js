import React, { Component } from 'react';

class Ingredients extends Component{

 	constructor(props){
 		super(props);

 		this.state={};
 		this.addIngredients = this.addIngredients.bind(this);
 	}

 	addIngredients(){
 		console.log('Ingredients added');
 		console.log(this.quantity.value,this.ingredient.value);
 		this.props.addIngredient(this.quantity.value,this.ingredient.value);

 		this.quantity.value = "";
 		this.ingredient.value = "";
 	}

 	render() {
 		return(
 			<div className="form-inline form-group">
					    
					    <label htmlFor="quantity">Quantity</label>
					    <input type="text"
					     className="form-control"
					     id="quantity"
					     ref={(input) => {this.quantity=input;}}
					     placeholder="Quantity" />

					    <label htmlFor="ingredient">Ingredients</label>
					    <input type="text"
					     className="form-control"
					     id="ingredient"
					     ref={(input) => {this.ingredient=input;}}
					     placeholder="Ingredient" />
					  	 
					  	<button type="button" onClick={this.addIngredients} className="btn btn-info">Add</button>
			</div>
 			);
 	}
 }

 export default Ingredients;