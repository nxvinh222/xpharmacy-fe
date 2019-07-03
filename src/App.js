import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import LoginScreen from './containers/LoginScreen'
import axios from './axios';

class App extends Component {

  state = {

  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/login" render={(props) => {
            return <LoginScreen {...props} state={this.state}/>
          }} />
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
