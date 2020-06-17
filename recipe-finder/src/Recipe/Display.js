import React, {Component} from 'react';
import './Display.css'

class Display extends Component{

    constructor(){
        super();
        this.state = {
            dataFound: 0,
            recipies: [{}]
        }
    }

    componentWillMount(){
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange",function(){
            if(this.readyState === 4){
                console.log(JSON.parse(this.responseText))
                if(JSON.parse(this.responseText).meals!=null){
                    that.setState({recipies: JSON.parse(this.responseText).meals[5], dataFound: 1})
                }
            }
        })
        xhr.open("GET","https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s=")
        xhr.setRequestHeader("Cache-Control", "no,cache");
        xhr.send(data);
    }

    render(){
        return(
            <div className="display">
                <h3 className="container" style={{marginLeft: 15, marginRight:15}}>{this.state.recipies.strMeal}</h3>
                <div className="maindisplay">
                    <img src={this.state.recipies.strMealThumb} alt="icon" />
                    <div>
                        category of meal: {this.state.recipies.strCategory}<br/>
                        Area of meal: {this.state.recipies.strArea}<br/><br/>
                        <div>Ingrediantes: <br/>
                            {this.state.recipies.map(ingre => )}
                        </div>
                        <p>Recipies: {this.state.recipies.strInstructions}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;