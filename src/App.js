import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import LoginScreen from './containers/LoginScreen'
import axios from './axios';

class App extends Component {

  state = {
    username: "test"
  }

  _onLogin = (username, password) => {
    axios
      .post("/api/v1/login", {
        username: username,
        password: password
      })
      .then(response => {
        this.setState({
          name: response.data.name,
          id: response.data.id
        })
        console.log(response);
        
      })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} username={this.state.username} _onLogin={this._onLogin} />
          }} /> */}
          <Route exact path="/login" render={(props) => {
            return <LoginScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
        </div>
        
      </BrowserRouter>
    );
  }

  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
