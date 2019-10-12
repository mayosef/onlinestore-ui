import React from 'react';
import productService from '../../services/product.service';
import './Products.scss'
import { Link } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        };
    }
    componentDidMount() {
        productService.getAll()
        .then(res => res.json())
        .then(products => this.setState({products}))
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <div className="d-flex justify-content-end mb-3">
                     <Link to="/admin/products/create-product" className="btn btn-primary">+ </Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Options</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product => {
                            return <tr key={product.id}>
                                <td>{product.id.substring(product.id.length -6)}</td>
                                <td>
                                    <img className="product.image" src={'http://localhost:4000/products/', product.image} />
                                    {product.title}
                                </td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>{product.brand}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products;