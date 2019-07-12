import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import LoginScreen from './containers/LoginScreen';
import ProductScreen from './containers/ProductScreen';
import NavBar from './components/NavBar';
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
          {/* <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} username={this.state.username} _onLogin={this._onLogin} />
          }} /> */}
          <NavBar/>
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
