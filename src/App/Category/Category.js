import React from 'react';
import {} from 'react-router-dom';
import ProductService from '../services/product.service';
import './Category.scss';
import {Link} from 'react-router-dom'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id
        this.state = {
            products:[]
        }
    }
        componentDidMount() {
        ProductService.getByCategoryId(this.categoryId)
            .then(res => res.json())
            .then(products => this.setState({products}))
    }
    render() {
    return (
            <div className="Category">
            {this.state.products.map((product, index) => {
                return <Link to={`/category/${this.categoryId}/product/${product.id}`} 
                 className="product"
                 key={index}>
                <div className="product-container">
                    <div>
                        <img className="image-product" src={'http://localhost:4000/products/' + product.image} />
                    </div>
                    <div>
                        {product.title}
                    </div>
                    <div>
                        {product.price}$
                    </div>
                    <div className="product-buttons">
                        <button className="btn btn-primary">View product</button>
                        <button className="btn btn-success">Add to cart</button>
                    </div>
                </div>
                 </Link>
            })}
            </div>
            )
        }
    }
    export default Category;
