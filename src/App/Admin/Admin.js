import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import createProduct from './Products/createProduct/createProduct';
// import Product from './Products/Products';


import UserService from '../services/user.service';
import Products from './Products/Products';

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        UserService
            .me()
            .then(res => res.json())
            .then(user => {
                if(! user.isAdmin) {
                    this.props.history.push('/')
                }
            })
    }
    render() {
        return (
            <Router>
                <div>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <ul>
                                    <li>
                                        <Link to="/admin/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/products/create-product">Create Product</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="list-group-item">
                                <ul>
                                    <li>
                                        <Link to="/admin/categories">Categories</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <ul>
                                    <Link to="/admin/users">Users</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <Route path="/admin/products" exact component={Products} />
                        <Route path="/admin/products/create-product" component={createProduct} />

                    </div>
                </div>
            </div>
            </Router>
            
            )
        }
    }
export default Admin