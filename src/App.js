import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import LoginScreen from './containers/LoginScreen';
<<<<<<< HEAD
import ProductScreen from './containers/ProductScreen';
=======
>>>>>>> 27c5661d0c99622959e6841ecb460f01d34ba9ed
import axios from './axios';

class App extends Component {

  state = {
    username: "test"
  }

  _onLogin = (username, password) => {
    axios
      .post("/api/v1/auth", {
        username: username,
        password: password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        console.log(response);     
      })
  }
  


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} username={this.state.username} _onLogin={this._onLogin} />
          }} />
          <Route exact path="/login" render={(props) => {
            return <LoginScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
          <Route exact path="/products" render={(props) => {
            return <ProductScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
