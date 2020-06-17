import React from 'react';
import Header from './Header/Header';
import Search from './Recipe/Search';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="main">
                <Header />
                <Search />
            </div>
        )
    }
}

export default App;