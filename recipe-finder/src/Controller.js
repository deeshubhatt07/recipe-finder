import React from 'react'
import './Controller.css'

class Controller extends React.Component{
    render(){

        const mappers = this.props.dish

        return(
            <div key={mappers.strMeal}>
                {/* {<h3 className="container" style={{marginLeft: 15, marginRight:15, borderLeft: "25%", textAlign: "center"}}>{this.props.dish.strMeal}</h3>} */}
                <div className="container" style={{marginLeft: 15, marginRight:15, borderLeft: "25%", textAlign: "center"}}>{mappers.strMeal}</div>
                <div className="maindisplay">
                    <img src={this.props.dish.strMealThumb} alt="icon" />
                    <div className="submain">
                        <span className="headers">category of meal: </span>{this.props.dish.strCategory}<br/>
                        <span className="headers">Area of meal: </span>{this.props.dish.strArea}<br/><br/>
                        <div className="headers" style={{textAlign: "center"}}>Ingrediantes: <br/>
                        </div>
                        <div className="ingrads">
                            {this.props.dish.strIngredient1}---{mappers.strMeasure1}<br/>
                            {this.props.dish.strIngredient2}---{mappers.strMeasure2}<br/>
                            {this.props.dish.strIngredient3}---{mappers.strMeasure3}<br/>
                            {this.props.dish.strIngredient4}---{mappers.strMeasure4}<br/>
                            {this.props.dish.strIngredient5}---{mappers.strMeasure5}<br/>
                            {this.props.dish.strIngredient6}---{mappers.strMeasure6}<br/>
                            {this.props.dish.strIngredient7}---{mappers.strMeasure7}<br/>
                            {this.props.dish.strIngredient8}---{mappers.strMeasure8}<br/>
                            {this.props.dish.strIngredient9}---{mappers.strMeasure9}<br/>
                            {this.props.dish.strIngredient10}---{mappers.strMeasure10}<br/>
                            {this.props.dish.strIngredient11}---{mappers.strMeasure11}<br/>
                            {this.props.dish.strIngredient12}---{mappers.strMeasure12}<br/>
                            {this.props.dish.strIngredient13}---{mappers.strMeasure13}<br/>
                            {this.props.dish.strIngredient14}---{mappers.strMeasure14}<br/>
                            {this.props.dish.strIngredient15}---{mappers.strMeasure15}<br/>
                            {this.props.dish.strIngredient16}---{mappers.strMeasure16}<br/>
                            {this.props.dish.strIngredient17}---{mappers.strMeasure17}<br/>
                        </div><br />
                        <div className="headers" style={{textAlign: "center"}}>Recipies: </div> 
                        <p>{this.props.dish.strInstructions}</p>
                        
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default Controller