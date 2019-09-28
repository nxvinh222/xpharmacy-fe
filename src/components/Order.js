import React, { Component } from 'react';
import axios from '../axios';

class Order extends Component {
    state = {
        orders: []
    }

    componentDidMount(){
        axios
            .get('/api/v1/orders', {
                headers: { token: localStorage.getItem('token')}
            })
            .then( data => {
                this.setState({
                    orders: data.data
                })
                console.log(this.state.orders);
            })
    }
    render() {
        
        return (
            <div>
                
            </div>
        );
    }
}

export default Order;