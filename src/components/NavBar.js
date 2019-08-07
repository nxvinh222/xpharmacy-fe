import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import axios from '../axios';

class NavBar extends Component {
    render() {
            var token = localStorage.getItem('token')
            let name
            let test
            if (token == null)
                 test = (<Nav.Link href="/login">Log in</Nav.Link>)
            else{
                axios
                    .get("/api/v1/auth/verify", {
                        headers: { token: localStorage.getItem('token')}
                    })
                    .then(data => {
                        name = data.data.name
                        console.log(name)
                        // test = (<Nav.Link href="/#">Welcome {data.data.name}</Nav.Link>)
                        test = (<Nav.Link href="/login">Log in</Nav.Link>)
                        
                    })       
                    console.log(name)
                    // test = (<Nav.Link href="/#">Welcome {name}</Nav.Link>)   
            }
        return (
            <div className="container">
                <Navbar bg="navbar-light" expand="lg" style={{padding: '30px'}}>
                    <Navbar.Brand className="navbar-brand active" href="/" style={{color: '#15cda8', fontsize: '2.0rem'}}>xPharmacy.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mt-2 mt-lg-0">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/order">Create Order</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        {test}
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;