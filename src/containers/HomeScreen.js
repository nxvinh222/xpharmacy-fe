import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'

class MainScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Banner/>
                <Carousel/>
            </div>
        );
    }
}

export default MainScreen;