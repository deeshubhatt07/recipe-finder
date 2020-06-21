import React from 'react'
import './Controller.css'

class Controller extends React.Component{
    render(){
        return(
            <div>
                <h3 className="container" style={{marginLeft: 15, marginRight:15}}>{this.props.dish.strMeal}</h3>
                <div className="maindisplay">
                    <img src={this.props.dish.strMealThumb} alt="icon" />
                    <div>
                        category of meal: {this.props.dish.strCategory}<br/>
                        Area of meal: {this.props.dish.strArea}<br/><br/>
                        <div>Ingrediantes: <br/>
                            
                        </div>
                        Recipies: 
                        <p>{this.props.dish.strInstructions}</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default Controller