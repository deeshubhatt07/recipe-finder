import React, {Component} from 'react';
import './Display.css'
import Ingrediants from '../Ingrediants/Ingrediants';
import Search from './Search';
import Header from '../Header/Header';
import Controller from '../Controller'

class Display extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataFound: 0,
            recipies: [{}],
            name: "fords"
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
                    that.setState({recipies: JSON.parse(this.responseText).meals, dataFound: 1})
                }
            }
        })
        xhr.open("GET","https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s=")
        xhr.setRequestHeader("Cache-Control", "no,cache");
        xhr.send(data);
    }

    render(){

        // let filteredContacts = this.state.recipies.filter(
        //     (dish) => {
        //         return dish.strMeal.indexOf(this.props.title) !== -1;
        //     }
        // )

        return(
            <div className="display">
                <Header />
                <Search />

                {this.state.recipies.map(dish => {
                    return(
                        <Controller dish={dish} key={this.state.recipies.id} imag={this.state.recipies.strMealThumb} />
                    ) 
                })}


                {/* {<h3 className="container" style={{marginLeft: 15, marginRight:15}}>{this.state.recipies.strMeal}</h3>
                <div className="maindisplay">
                    <img src={this.state.recipies.strMealThumb} alt="icon" />
                    <div>
                        category of meal: {this.state.recipies.strCategory}<br/>
                        Area of meal: {this.state.recipies.strArea}<br/><br/>
                        <div>Ingrediantes: <br/>
                            
                        </div>
                        <p>Recipies: {this.state.recipies.strInstructions}</p>
                    </div>
                </div>} */}



            </div>
        )
    }
}

export default Display;