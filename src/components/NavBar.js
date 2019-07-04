import React, { Component } from 'react'
import Brand from './Brand';
import FunctionsNavBar from './FunctionsNavBar';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="container">
                    <Brand />
                    <FunctionsNavBar />
                </div>
            </div>
        )
    }
}


export default NavBar;