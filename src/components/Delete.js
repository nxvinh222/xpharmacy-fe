import React, { Component } from 'react';
import SearchField from './SearchField';
import Product from './Product'

class Delete extends Component {
    render() {
        const filteredProducts = this.props.products.filter(item => item.name.includes(this.props.searchString));
        const displayedProducts = filteredProducts.map(item => <Product searchString={this.props.searchString} product={item}/>)
        return (
            <div>
                <SearchField onSearchChanged={this.props.onSearchChanged}/>
                <div className="row mb-5">
                {displayedProducts}
                </div>
            </div>
        );
    }
}

export default Delete;