import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from '../axios';

class DetailScreen extends Component {

    componentDidMount() {
        axios
        .get(`/api/v1/products/${this.props.match.params.imageId}`)
        .then( data => {
            console.log(data.data)
            this.setState({image: data.data});
        })
        .catch( err => console.log(err))
    }

    render() {
        return (
            <div>
                <NavBar/>
                
            </div>
        );
    }
}

export default DetailScreen;