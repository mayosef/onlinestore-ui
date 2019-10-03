import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Products from './Products/Products';
import UserService from '../services/user.service';

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
                                <Link to="/admin/products">Products</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/admin/categories">Categories</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/admin/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <Route path="/admin/products" component={Products} />
                    </div>
                </div>
            </div>
            </Router>
            
            )
        }
    }
export default Admin