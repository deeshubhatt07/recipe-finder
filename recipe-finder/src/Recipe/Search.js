import React from 'react';
import './Search.css'

class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Enter the name of the dish" 
                    className="imput"></input>
                <button>Get Recipes</button>
            </div>
        )
    }
}

export default Search;