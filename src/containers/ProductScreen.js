import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ProductField from '../components/ProductField';
class ProductScreen extends Component {
<<<<<<< HEAD
    state = {
        
    }
    Nam123 = (value, event) => {
        event.preventDefault()
        this.setState({
            CurrentCategory: value
        },()=>{
            console.log(this.state.CurrentCategory)
        })
        
    }
=======

    state = {
        category: ''
    }

    categoryHandler = (event) => {
        event.preventDefault();
        this.setState({
            category: 'Addition'
        }, () => console.log(this.state.category));
    }

>>>>>>> 104c83605d42f7ef0c6f1614c8176dc8893f9f57
    render() {
        return (
            <div>
                <NavBar/>  
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                        <div className="d-flex">
                                            <div className="mr-1 ml-md-auto">
                                            <DropdownButton id="dropdown-basic-button" title="Latest">
                                                <Dropdown.Item eventKey={1} onClick={(this.categoryHandler)}>Men</Dropdown.Item>
                                                <Dropdown.Item eventKey={2}>Women</Dropdown.Item>
                                                <Dropdown.Item eventKey={3}>Children</Dropdown.Item>
                                            </DropdownButton>
                                            </div> -->
                                            <div className="mr-1 ml-md-auto">
                                                <DropdownButton id="dropdown-basic-button" title="Reference">
                                                    <Dropdown.Item href="#/action-1" onClick = {(event)=>this.Nam123( "relevant", event)} >Relevance</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Name, A to Z</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Name, Z to A</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href="#/action-3">Price, low to high</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Price, high to low</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ProductField category={this.state.category} products={this.props.state.products}/>
                                <div className="row" data-aos="fade-up">
                                    <div className="col-md-12 text-center">
                                        <div className="site-block-27">
                                            <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-md-3 order-1 mb-5 mb-md-0">
                                <div className="border p-4 rounded mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                                    <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></a></li>
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></a></li>
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductScreen;