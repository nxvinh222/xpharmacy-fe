import React, { Component } from 'react';
import '../styles/styles.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="container hero-banner">
                        <div id="img1">
                            <img src="/v2osk-184484-unsplash.jpg" style={
                                {width: "100%",
                                height: "100%",
                            objectFit: "cover"}}/>
                        </div>
                        <div id="img2">
                            <span style={
                                {position: "absolute",
                                left: 0,
                                fontsize: "2rem",
                                margin: "20px"}}>Future</span>

                            <span style={
                                {position: "absolute",
                                right: 0,
                                fontsize: "2rem",
                                margin: "20px"}}></span>

                            <span style={
                                {position: "absolute",
                                right: 0,
                                fontsize: "2rem",
                                margin: "20px"}}>Pharmacy</span>

                            <span style={
                                {position: "absolute",
                                right: 0,
                                fontsize: "2rem",
                                margin: "20px"}}></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;