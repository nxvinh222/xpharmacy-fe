import React, { Component } from 'react';
import axios from '../axios';

class Add extends Component {
    state = {
        name: '',
        price: 0,
        info: '',
        image: null,
        category: '',
        sold: 0
    };

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

            this.setState({
                [name]: value
            })
        
    }

    handleImage = (event) => {
        let image = event.target.files[0]
        this.setState({image: image})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        let image = new FormData()
        image.append("image", this.state.image)
        axios.post('/api/v1/imageUploads', image, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(data => {
            console.log(data.data.path)
            axios
                .post('/api/v1/products',{
                    name: this.state.name,
                    price: this.state.price,
                    info: this.state.info,
                    image: data.data.path,
                    category: this.state.category,
                    sold: this.state.sold
                })
        }).catch(err => console.log(err))
        // axios
        // .post('/api/v1/products',{
        //     name: this.state.name,
        //     price: this.state.price,
        //     info: this.state.info,
        //     image: this.state.image,
        //     category: this.state.category,
        //     sold: this.state.sold
        // })
        // .then(data => {
        //     console.log('The form was submitted with the following data:');
        //     console.log(data);
        // })
    }
    render() {
        return (
            <div>
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" >
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Product's Name" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">Price</label>
                        <input type="number" id="price" className="FormField__Input" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="info">Info</label>
                        <input type="text" id="info" className="FormField__Input" placeholder="Information" name="info" value={this.state.info} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="image">Image</label>
                        <input type="file" id="image" className="FormField__Input" placeholder="Image" name="image" onChange={this.handleImage} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="category">Category</label>
                        <input type="text" id="category" className="FormField__Input" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="sold">Sold</label>
                        <input type="number" id="sold" className="FormField__Input" placeholder="Sold" name="sold" value={this.state.sold} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add;