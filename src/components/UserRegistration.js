import React, { Component } from "react";
import '../App.css';
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import {Link, Redirect} from "react-router-dom";

// const emailRegex = RegExp(/[A-Z, 0-9, !@#$%^&*]/)
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
//This validates empty form errors
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    Object.values(rest).forEach(val =>{
        val === null && (valid = false)
    });
    });
    return valid;
};
//This validates filled forms

export default class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            // lastName: null,
            email: null,
            password: null,
            redirect: false,
            formErrors: {
                name: "",
                // lastName: "",
                email: "",
                password: ""
            }
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        // Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        `)
            let info = {
                name: this.state.name,
                // lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            axiosWithAuth()
                .post('api/auth/register-user', info)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('id', res.data.id)
                    console.log(res)
                    this.setState({
                        redirect: true
                    })
                })
                .catch(error => console.log(error, "Login Error"))
        } else {
            console.error('FORM INVALID - ERROR')
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='UserAccount'/>
        }
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'name':
                formErrors.name = value.length < 3  ? 'minimum 6 characters required' : '';
                break;
            // case 'lastName':
            //     formErrors.lastName = value.length < 3  ? 'minimum 8 characters required' : '';
            //     break;
            case 'email':
                formErrors.email = emailIsValid(value) ? '' : 'email invalid';
                break;
            case 'password':
                formErrors.password = value.length < 8 ? 'minimum 6 characters required' : '';
                break;
            default:
                break;
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state))
    };
    render() {
        const {formErrors} = this.state;

        return <div className='wrapper'>
            <div className='form-wrapper'>
                {this.renderRedirect()}
                <h1>Rider Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='firstName'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className={formErrors.name.length > 0 ? 'error' : null}
                            placeholder='Name'
                            name='name'
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.name.length > 0 && (
                            <span className='errorMessage'>{formErrors.name}</span>
                        )}
                    </div>
                    {/*<div className='lastName'>*/}
                    {/*    <label htmlFor='lastName'>Last Name</label>*/}
                    {/*    <input*/}
                    {/*        className={formErrors.lastName.length > 0 ? 'error' : null}*/}
                    {/*        placeholder='Last Name'*/}
                    {/*        type='lastName'*/}
                    {/*        name='lastName'*/}
                    {/*        noValidate*/}
                    {/*        onChange={this.handleChange} />*/}
                    {/*    {formErrors.lastName.length > 0 && (*/}
                    {/*        <span className='errorMessage'>{formErrors.lastName}</span>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    <div className='email'>
                        <label htmlFor='email'>Email</label>
                        <input
                            className={formErrors.email.length > 0 ? 'error' : null}
                            placeholder='Email'
                            type='email'
                            name='email'
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.email.length > 0 && (
                            <span className='errorMessage'>{formErrors.email}</span>
                        )}
                    </div>
                    <div className='password'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className={formErrors.password.length > 0 ? 'error' : null}
                            placeholder='Password'
                            type='password'
                            name='password'
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.password.length > 0 && (
                            <span className='errorMessage'>{formErrors.password}</span>
                        )}
                    </div>
                    <div className='createAccount'>
                        <button type='submit'>Create Account</button>
                        <small>Already Have an Account?</small>
                        <Link to='/login'>Click here</Link>
                    </div>
                </form>
            </div>
        </div>;
    }
}