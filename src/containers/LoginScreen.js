import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../axios';

import Login from '../components/Login';

class LoginScreen extends Component {

    // _onLogin = () => {
    //     axios
    //       .post("/api/v1/login", {
    
    //       })
    // }

    render() {
        return (
            <div>
               <Login/> 
            </div>
        );
    }
}

export default LoginScreen;