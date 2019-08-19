import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import axios from '../axios';
import { Collapse } from 'react-bootstrap';
class Cart extends Component {

    state = {
        name: '',
        address: '',
        phone: '',
        email: '',
        note: ''
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios
        .post("/api/v1/orders",{
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email,
            date: new Date().toLocaleString()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className="font-weight-bold">MY CART</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-4">
                            <input className="w-25" type="number"></input> x $15.2
                        </div>
                        <div className="col-2">
                            $0
                        </div>
                    </div>
                    <hr/>
                    <h1 className="font-weight-bold">DELIVERY</h1>
                    <div className="FormCenter">
                        <form onSubmit={this.handleSubmit} className="FormFields">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="name">Full name</label>
                                <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="address">Address</label>
                                <input type="text" id="address" className="FormField__Input" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="phone">Phone number</label>
                                <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="note">Note</label>
                                <textarea type="text" id="note" className="FormField__Input" name="note" placeholder="Enter your note" value={this.state.note} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20">Done</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;