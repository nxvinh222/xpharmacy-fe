import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'

class MainScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Banner/>
            </div>
        );
    }
}

export default MainScreen;