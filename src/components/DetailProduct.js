import React, { Component } from 'react';

class DetailProduct extends Component {
    render() {
        const displayedProduct = this.props.product ? 
        <div className="detail_Product">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">          
                    <img className="img-fluid" src={this.props.product.image}/>
                </div>
                <div className="col-6">
                    <h3>{this.props.product.name}</h3>
                    <h2>{this.props.product.price}$</h2>
                    <p>{this.props.product.info}</p>
                </div>
            </div>
        </div>
        : ''
        return (
            <div>
                {displayedProduct}
            </div>
        );
    }
}

export default DetailProduct;