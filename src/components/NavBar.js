import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <Navbar bg="navbar-light" expand="lg" style={{padding: '30px'}}>
                    <Navbar.Brand className="navbar-brand active" href="/" style={{color: '#15cda8', fontsize: '2.0rem'}}>xPharmacy</Navbar.Brand>
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
    }
}

export default NavBar;