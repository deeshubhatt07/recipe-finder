import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component{

    constructor(){
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    openModalHandler = () =>{
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = () =>{
        this.setState({modalIsOpen: false})
    }

    render(){
        return(
            <div id="Header">
                <img src={logo} className="app-logo" alt="logo"/>
                <Button variant="contained" onClick={this.openModalHandler}>LOGIN</Button>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                onRequestClose={this.closeModalHandler}>
                </Modal>
            </div>
        )
    }
}

export default Header;