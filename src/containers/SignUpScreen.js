import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';

class SignUpScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SignUp/>
            </div>
        );
    }
}

export default SignUpScreen;