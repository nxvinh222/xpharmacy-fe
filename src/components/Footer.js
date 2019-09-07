import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer" style={{padding: '60px 0'}}>
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-md-9">
                                <div className="brand-footer" style={{fontsize: '1.2rem'}}>xPharmacy.</div>
                                <div className="duoi" style={{display: 'flex', padding:'0 17px'}}>
                                    <div className="trai" style={{fontsize: '1.7rem'}}>
                                        <i className="fab fa-facebook-square" style={{color: '#1C36BE'}}></i>
                                    </div>
                                    <div className="phai" style={{marginleft: '10px', fontsize: '1.7rem'}}>
                                        <i className="fab fa-instagram" style={{color: '#CE1183'}}></i>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-md-3">
                                <form action="/">
                                        <div className="form-group form-inline my-2 my-lg-0 mr-auto">
                                            <input type="text" className="form-control" width="300" name="" id="" aria-describedby="emailHelpId" placeholder="Enter your search..."/>
                                            <button className="btn btn-primary" type="submit">Search</button>
                                        </div>
                                </form>                               
                            </div>
                        </div> */}
                        

                        {/* <!-- Footer --> */}


                        {/* <!-- Copyright --> */}
                        <div className="footer-copyright text-center py-3">© 2018 Copyright:
                            <a href="http://xpharmacyx.herokuapp.com/"> xPharmacy</a>
                        </div>
                        {/* <!-- Copyright --> */}

                        

                    </div>     
                </div>
            </div>
        );
    }
}

export default Footer;