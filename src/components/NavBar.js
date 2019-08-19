import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import axios from '../axios';

class NavBar extends Component {
    state = {

    }
    componentDidMount(){
        axios
        .get("/api/v1/auth/verify", {
            headers: { token: localStorage.getItem('token')}
        })
        .then(data => {
            // console.log(name)
            this.setState({
                ProfileName: data.data.name
            })
            
            
        })         
    }
    render() {
            var token = localStorage.getItem('token')
            
            let SignIn
            let SignUp
            if (token == null)
                SignIn = (<Nav.Link href="/login">Log in</Nav.Link>)
            else
                SignIn = (<Nav.Link href="/#">Welcome, {this.state.ProfileName}</Nav.Link>)
            if (token == null)
                SignUp = (<Nav.Link href="/signup">Sign Up</Nav.Link>)


        return (
            <div className="container">
                <Navbar bg="navbar-light" expand="lg" style={{padding: '30px'}}>
                    <Navbar.Brand className="navbar-brand active" href="/" style={{color: '#15cda8', fontsize: '2.0rem'}}>xPharmacy.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mt-2 mt-lg-0">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/order">Create Order</Nav.Link>
                        {SignUp}
                        {SignIn}
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;