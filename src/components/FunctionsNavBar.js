import React, { Component } from 'react';

class FunctionsNavBar extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Create Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FunctionsNavBar;
