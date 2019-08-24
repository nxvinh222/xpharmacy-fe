import React, { Component, useState } from 'react';
import axios from '../axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class product extends Component {
    state = {
        field: this.props.field
    }
    _addToCart = (event) => {
        var cart;
        if (localStorage.getItem('cart')==null)
            cart = []
        else
            cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(this.props.product._id);
        localStorage.setItem('cart', JSON.stringify(cart));
        event.preventDefault();
    }

    _deleteProd = () => {
        axios
            .delete(`/api/v1/products/${this.props.product._id}`)
            .then(alert("Delete success"))
            .catch(err => console.log(err));
    }

    render() {
        const Delete = () => {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const handleDelete = () => {
                this._deleteProd();
                setShow(false);
            }
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Delete
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Verify</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you wish to delete this item?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
        }
        
        const func = () => {
            let button
            if(this.state.field === "product") {
                button = (
                    <a href="#" 
                        onClick={this._addToCart} className="btn btn-primary">ADD TO CART
                    </a>
                )
            } else if(this.state.field === "delete") {
                button = ( <Delete/> )
            }
            return button;
        }
        const hello = () => console.log(this.state.field);
        return (
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div key={this.props.product._id} className="block-4 text-center border">
                    <figure className="block-4-image">
                    <Link to={`/products/${this.props.product._id}`}>
                        <img src={this.props.product.image} alt="Image placeholder" className="img-fluid"/>
                    </Link>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><a href="shop-single.html">{this.props.product.name}</a></h3>
                        <p className="text-primary font-weight-bold">{this.props.product.price}$</p>
                        {func()}
                    </div>
                </div>
            </div>
        );
    }
}

export default product;