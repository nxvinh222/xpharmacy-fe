import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import LoginScreen from './containers/LoginScreen';
import ProductScreen from './containers/ProductScreen';
import axios from './axios';

class App extends Component {

  state = {
    products: []
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
  
  componentDidMount(){
    axios
      .get("/api/v1/products", {
        headers: { token: localStorage.getItem('token')}
      })
      .then(data =>{
        this.setState({products: data.data})
        console.log(this.state.products);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen/>
          }} />
          <Route exact path="/login" render={(props) => {
            return <LoginScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
          <Route exact path="/products" render={(props) => {
            return <ProductScreen {...props} state={this.state}/>
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
