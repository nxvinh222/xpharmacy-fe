import React, { Component } from 'react';
import Navbar from '../components/NavBar';
class Cart extends Component {
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
                    <form>
                        <div className="col-6 text-left font-weight-bold">
                            <div className="form-group row">
                                <div className="col-4">
                                    Full Name
                                </div>
                                <div className="col-8">
                                    <input type="text" class="form-control" id="name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4">
                                    Address
                                </div>
                                <div className="col-8">
                                    <input type="text" class="form-control" id="address"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4">
                                    Phone number
                                </div>
                                <div className="col-8">
                                    <input type="text" class="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4">
                                    Email
                                </div>
                                <div className="col-8">
                                    <input type="email" class="form-control" id="email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4">
                                    Note
                                </div>
                                <div className="col-8">
                                    <textarea class="form-control" id="note" rows="3"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Cart;