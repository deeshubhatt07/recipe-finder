import React from 'react';
import './Search.css'
import Display from './Display';
import ReactDOM from 'react-dom';

class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            dishname: ""
        }
    }

    changeHandler(event){
        this.setState({dishname: event.target.vale});
    }

   /* recipeHandler(){
        ReactDOM.render(<Display dish= {this.state.dishname} />,document.getElementById('root'))
    }*/

    render(){
        return(
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Enter the name of the dish" 
                    className="imput"></input>
                <button color="secondary" >Get Recipes</button>
            </div>
        )
    }
}

export default Search;