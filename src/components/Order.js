import React, { Component } from 'react';
import axios from '../axios';
import { Table } from 'react-bootstrap';

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
            .catch (err => console.log(err));
    }
    render() {
        const displayedOrders = this.state.orders.map(item => (
        <>   
            <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.total}</td>
            </tr>
        </>
        ))
        return (
            <div>
                <h2>Orders</h2>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {displayedOrders}
                    </tbody>
                    
                </Table>
            </div>
        );
    }
}

export default Order;