import React from 'react';
import './Search.css'
import Display from './Display';
import ReactDOM from 'react-dom'

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dishname: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handler = this.handler.bind(this)
        //this.getRecipe = this.getRecipe.bind(this)
    }

    changeHandler(e){
        this.setState({dishname: e.target.value})
    }

    handler(){
        console.log(this.state.dishname);
        ReactDOM.render(<Display title={this.state.dishname} />,document.getElementById('root'))
    }

    render(){

        return(
            <div>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Enter the name of the dish" 
                        className="imput"
                        onChange = {this.changeHandler}
                        value = {this.props.dishname}></input>
                    <button onClick={this.handler}> Get Recipes</button><br/>
                </div>
            </div>
        )
    }
}

export default Search;