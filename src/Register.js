import React from 'react';
import { Formik, Field, ErrorMessage , Form } from 'formik';
import User from './models/user';
import UserService from './services/user.service';

class Register extends React.Component {

    send(values) {
        UserService
            .register(values)
            .then(() => {
                this.props.history.push('/login')
        })
        
    }
    render() {
        return (
            <div className="container">
            <Formik onSubmit={this.send.bind(this)}
            initialValue={{name:'', email:'',password:'',age:''}}
            validationSchema={User}>
            <Form>
                <h2>Sing Up</h2>
                <div className="form-group">
                    <label>Full Name</label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" component="div" className="alert alert-danger"/>
                </div>
                <div className="form-group">
                    <label>Confirm email address</label>
                    <Field name="email2" type="text" className="form-control" />
                    <ErrorMessage name="email2" component="div" className="alert alert-danger"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field name="password" type="text" className="form-control"/>
                    <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                </div>
                <div className="form-group">
                    <label>Confirm password</label>
                    <Field name="password2" type="text" className="form-control"/>
                    <ErrorMessage name="password2" component="div" className="alert alert-danger"/>

                </div>
                <div className="form-group">
                    <label>Age</label>

                    <Field name="age" type="text" className="form-control" />
                    <ErrorMessage name="age" component="div" className="alert alert-danger" />

                </div>
                <div className="form-group">
                    <input type="submit" value="Register!" className="btn btn-primary"/>
                </div>
            </Form>
            </Formik>
        </div>
        )
    }
}

export default Register;