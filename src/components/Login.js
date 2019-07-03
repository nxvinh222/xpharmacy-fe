import React, { Component } from 'react';

class Login extends Component {
    state = {

    }
// cho em gọi request đâu :v 
    handleUsernameChange = event => {
        this.setState({username: event.target.value})
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value})
    }

    Login = (event) => {
        event.preventDefault();
        this.props._onLogin(this.state.username, this.state.password);
    }

    render() {
    
        return (
            <div className="login">
                <div className="container">
                    <form>
                        <div className="form-group">
                            <input onChange={this.handleUsernameChange} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter username"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.Login}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;