import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
class ProductScreen extends Component {
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
                                                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Children</Dropdown.Item>
                                            </DropdownButton>
                                            </div> -->
                                            <div className="mr-1 ml-md-auto">
                                                <DropdownButton id="dropdown-basic-button" title="Reference">
                                                    <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
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
                                <div className="row mb-5">
                    
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Tank Top</a></h3>
                                                <p className="mb-0">Finding perfect t-shirt</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Polo Shirt</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">T-Shirt Mockup</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Tank Top</a></h3>
                                                <p className="mb-0">Finding perfect t-shirt</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Polo Shirt</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                    <div className="block-4 text-center border">
                                        <figure className="block-4-image">
                                        <a href="shop-single.html"><img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                        </figure>
                                        <div className="block-4-text p-4">
                                        <h3><a href="shop-single.html">T-Shirt Mockup</a></h3>
                                        <p className="mb-0">Finding perfect products</p>
                                        <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Tank Top</a></h3>
                                                <p className="mb-0">Finding perfect t-shirt</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                            <a href="shop-single.html"><img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid"/></a>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="shop-single.html">Polo Shirt</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                    
                    
                                </div>
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