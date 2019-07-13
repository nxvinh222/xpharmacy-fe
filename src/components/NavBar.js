import React, { Component } from 'react';
<<<<<<< HEAD
import { Navbar, Nav } from 'react-bootstrap';
=======
import '../styles/styles.css';
>>>>>>> 27c5661d0c99622959e6841ecb460f01d34ba9ed

class NavBar extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="container">
                <Navbar bg="navbar-light" expand="lg" style={{padding: '30px'}}>
                    <Navbar.Brand className="navbar-brand active" href="#home" style={{color: '#15cda8', fontsize: '2.0rem'}}>xPharmacy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mt-2 mt-lg-0">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="#">Create Order</Nav.Link>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        <Nav.Link href="#">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
=======
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
>>>>>>> 27c5661d0c99622959e6841ecb460f01d34ba9ed
    }
}

export default NavBar;