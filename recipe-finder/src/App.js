import React from 'react';
import Header from './Header/Header';
import Search from './Recipe/Search';
import Display from './Recipe/Display';
import Noposts from './Recipe/Noposts';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="main">
                <Header />
                <Search />
                <Noposts />
            </div>
        )
    }
}

export default App;