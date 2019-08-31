import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from '../models/user';
import UserService from '../services/user.service';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Register from '../Register/Register.js';
import './Login.scss';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting:false,
        }
    }
    send(values) {
        this.setState({submitting:true})
        UserService
            .login(values.email, values.password)
            .then(response => response.json())
            .then(response => {
                const 
                TwoWeeksTime = 60 * 60 * 24 * 14;
                cookie.save('user', response.token, {path:'/', maxAge:TwoWeeksTime})
                this.setState({submitting:false})
                this.props.history.push('/')
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="container"> 
                <div>
                    <h2>LOGIN</h2>
                    <Formik 
                        onSubmit={this.send.bind(this)}
                        initialValues={{email: '', password: ''}}>
                        
                        <Form className="login">
                            <div className="login-form">
                                <label>EMAIL ADRESS</label>
                                <Field type="text" name="email" className="login-input" />
                                <div className="bar"></div>
                                <ErrorMessage name="email" component="div" className="login-alert" />

                            </div>

                            <div className="login-form">
                                <label>PASSWORD</label>
                                <Field type="text" name="password" className="login-input" />
                                <div className="bar"></div>
                                <ErrorMessage name="name" component="div" className="login-alert"/>

                            </div>
                            <div>
                                <input className='btn btn-success'
                                disabled={this.state.submitting}
                                type="submit" 
                                value={this.state.submitting ? "Logging..." : "Login"} />
                            </div>
                            <Router>
                            <div>
                                <li><Link to="/register">Not register yet?</Link></li>
                            </div>
                                <div className="login-register">
                                <Route path="/register/" component={Register} />
                                </div>
                            </Router>
                        </Form>
                    </Formik>
                </div>
            </div>   
        )
    }
}
export default Login
