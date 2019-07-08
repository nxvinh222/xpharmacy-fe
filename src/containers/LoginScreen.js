import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../axios';

import Login from '../components/Login';
import NavBar from '../components/NavBar';

class LoginScreen extends Component {

    // _onLogin = () => {
    //     axios
    //       .post("/api/v1/login", {
    
    //       })
    // }

    render() {
        return (
            <div>
                <NavBar/>
               <Login _onLogin={this.props._onLogin}/> 
            </div>
        );
    }
}

export default LoginScreen;