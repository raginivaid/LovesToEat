import React, { Component } from 'react';
class IngredientList extends Component {
    displayIngredients(){
        let resultsArray = [];
        this.props.recipe.ingredients.map((item,i) => {
            resultsArray.push(<li key={i}>{item.quantity} - {item.ingredient}</li>);
            return false;// this prevents a warning.
        });
        return resultsArray;
    }
    render(){
        return(
            <div className="container">
                <h5><strong>Ingredients List:</strong></h5>
                <ul>{this.displayIngredients()}</ul>
            </div>
        );
    }
}
export default IngredientList;