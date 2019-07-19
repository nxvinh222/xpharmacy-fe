import React, { Component } from 'react';

class product extends Component {
    render() {
        return (
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                    <a href="shop-single.html"><img src="/v2osk-184484-unsplash.jpg" alt="Image placeholder" className="img-fluid"/></a>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><a href="shop-single.html">{this.props.product.name}</a></h3>
                        <p className="mb-0">{this.props.product.info}s</p>
                        <p className="text-primary font-weight-bold">{this.props.product.price}$</p>
                        <a href="#" class="btn btn-primary">ADD TO CART</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;