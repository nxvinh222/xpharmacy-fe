import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
// cho em gọi request đâu :v 
    // handleUsernameChange = event => {
    //     this.setState({username: event.target.value})
    // }

    // handlePasswordChange = event => {
    //     this.setState({password: event.target.value})
    // }

    handleChange = (event) => {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    Login = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props._onLogin(this.state.username, this.state.password);
    }

    render() {
    
        return (
            <div className="container">
                {/* <div className="container">
                    <form>
                        <div className="form-group">
                            <input onChange={this.handleUsernameChange} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter username"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.Login}>Submit</button>
                    </form>
                </div> */}
                <div className="FormCenter">
                    <form onSubmit={this.Login} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;