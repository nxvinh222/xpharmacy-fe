import React, { Component } from 'react';
import '../styles/styles.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light" style={{padding: '30px'}}>
                        <a className="navbar-brand active" href="#" style={{'color': '#15cda8', 'fontsize': '2.0rem'}}>xPharmacy.<span class="sr-only">(current)</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="colapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span classname="navbar-toggler-icon"></span>
                        </button>
                            
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Create Order</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Log in</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cart</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
        )
    }
}


export default NavBar;