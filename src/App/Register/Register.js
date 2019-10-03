import React from 'react';
import { Formik, Field, ErrorMessage , Form } from 'formik';
import User from '../models/user';
import UserService from '../services/user.service';
import './Register.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        }
    }
    send(values) {
        this.setState({submitting:true})
        UserService
            .register(values)
            .then(() => {
                this.setState({submitting:false})
                this.props.history.push('/login')
        })
        
    }
    render() {
        return (
            <div className="container">
            <Formik onSubmit={this.send.bind(this)}
            initialValue={{name:'', email:'',password:'',age:''}}
            validationSchema={User}>
            <Form className="register">
                <h2>SING UP</h2>
                <div className="register-form">
                    <label>Full Name</label>
                    <Field name="name" type="text" className="register-input" />
                    <div className="bar"></div>
                    <ErrorMessage name="name" component="div" className="alert-register"/>
                </div>
                <div className="register-form">
                    <label>Email Address</label>
                    <Field name="email" type="text" className="register-input" />
                    <div className="bar"></div>
                    <ErrorMessage name="email" component="div" className="alert-register"/>

                </div>
                <div className="register-form">
                    <label>Confirm email address</label>
                    <Field name="email2" type="text" className="register-input" />
                    <div className="bar"></div>

                    <ErrorMessage name="email2" component="div" className="alert-register"/>
                    
                </div>
                <div className="register-form">
                    <label>Password</label>
                    <Field name="password" type="text" className="register-input"/>
                    <div className="bar"></div>

                    <ErrorMessage name="password" component="div" className="alert-register"/>
                </div>
                <div className="register-form">
                    <label>Confirm password</label>
                    <Field name="password2" type="text" className="register-input"/>
                    <div className="bar"></div>

                    <ErrorMessage name="password2" component="div" className="alert-register"/>
                </div>
                <div className="register-form">
                    <label>Age</label>
                    <Field name="age" type="text" className="register-input" />
                    <div className="bar"></div>
                    <ErrorMessage name="age" component="div" className="register-alert" />
                </div>
                <div className="register-form">
                    <input type="submit" value="Register!"  disabled={this.state.submitting} className="btn btn-primary"/>
                </div>

            </Form>
            </Formik>
        </div>
        )
    }
}

export default Register;