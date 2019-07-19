import React, { Component } from 'react';
import Product from '../components/Product';

class ProductField extends Component {
    
    render() {
        const allproduct = this.props.products.map(item => <Product product={item}/>)
        console.log(this.props.products)
        return (
            <div className="row mb-5">
                {allproduct}
            </div>
        );
    }
}

export default ProductField;