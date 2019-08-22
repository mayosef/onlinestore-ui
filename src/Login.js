import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from './models/user';
import UserService from './services/user.service';


export class Login extends Component {
    constructor(props) {
        super(props);
    }
    send(values) {
        UserService
            .login(values.email, values.password)
            .then(response => response.json())
            .then(response => {
                document.cookie = "user=" + response.token;
                this.props.history.push('/')
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="container"> 
                <div>
                    <h2>Login</h2>
                    <Formik 
                        onSubmit={this.send.bind(this)}
                        initialValues={{email: '', password: ''}}>
                        
                        <Form>
                            <div className="form-group">
                                E-mail <Field type="text" name="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                Password <Field type="text" name="password" className="form-control" />
                                <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                            </div>
                            <div>
                                <input className='btn btn-success' type="submit" value="Login" />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>   
        )
    }
}
export default Login
