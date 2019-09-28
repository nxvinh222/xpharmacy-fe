import React, { Component } from 'react';
import axios from '../axios'

class CartItem extends Component {
    state = {
        image: "",
        price: ""
    }
    componentDidMount() { 
        axios
        .get(`/api/v1/products/${this.props.id}`)
        .then(data =>{ 
            this.setState({
                image: data.data.image,
                price: data.data.price,
                name: data.data.name
            })
            // console.log(data.data)
            }
        )
    }
    render() {
        return (
            <div className="row" >
                <div className="col-md-2 mb-2">
                    <img src={this.state.image} alt="Image placeholder" className="img-fluid"/>
                </div>
                <div className="col-md-2">
                    {this.state.name}
                </div>
                <div className="col-md-2 ml-auto">
                    <input className="w-25" type="number" value={this.props.quantity}></input> x {this.state.price}
                </div>
                <div className="col-md-2">
                    Total = {this.state.price * this.props.quantity}
                </div>
            </div>
            
        );
    }
}

export default CartItem;