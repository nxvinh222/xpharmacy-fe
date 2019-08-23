import React, { Component } from 'react';
import SearchField from './SearchField';
import Product from './Product'

class Delete extends Component {
    render() {
        const filteredProducts = this.props.products.filter(item => item.name.includes(this.props.searchString));
        const displayedProducts = filteredProducts.map(item => <Product product={item}/>)
        return (
            <div>
                <SearchField onSearchChanged={this.props.onSearchChanged}/>
                {displayedProducts}
            </div>
        );
    }
}

export default Delete;