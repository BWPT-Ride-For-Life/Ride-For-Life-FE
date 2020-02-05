import React, { Component } from "react";
import './App.css';

const emailRegex = RegExp(/[A-Z, 0-9, !@#$%^&*]/)

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
//This validates empty form errors
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
};
//This validates filled forms
Object.values(rest).forEach(val =>{
    val === Null && (valid = false)
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            location: null,
            price: null,
            email: null,
            phoneNumber: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                location: "",
                price: "",
                email: "",
                phoneNumber: "",
                password: ""
            }
        };

    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.LastName}
        Location: ${this.state.location}
        Price: ${this.state.price}
        Email: ${this.state.email}
        Phone Number: ${this.state.phoneNumber}
        Password: ${this.state.password}
        `)
        } else {
            console.error('FORM INVALID - ERROR')
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 6  ? 'minimum 6 characters required' : '';
                break;
            case 'lastName':
                formErrors.lastName = value.length < 8  ? 'minimum 8 characters required' : '';
                break;
            case 'location':
                formErrors.location = value.length < 10 ? 'minimum 10 characters required' : '';
                break;
            case 'price':
                formErrors.price = value.length < 6 ? 'minimum 6 characters required' : '';
                break;
            case 'email':
                formErrors.email = emailRegex.text(value) ? '' : 'email invalid';
                break;
            case 'phoneNumber':
                formErrors.phoneNumber = value.length < 11 ? 'minimum 11 characters required' : '';
                break;
            case 'fpassword':
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
                <h1>Rider Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='firstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            className={formErrors.firstName.length > 0 ? 'error' : null}
                            placeholder='First Name'
                            type='text'
                            name='firstName'
                            noValidate
                            onChange={this.handleChange} />
                            {formErrors.firstName.length > 0 && (
                                <span className='errorMessage'>{formErrors.firstName}</span>
                            )}
                    </div>
                    <div className='lastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            className={formErrors.lastName.length > 0 ? 'error' : null}
                            placeholder='Last Name'
                            type='lastName'
                            name='lastName'
                            noValidate
                            onChange={this.handleChange} />
                            {formErrors.lastName.length > 0 && (
                                <span className='errorMessage'>{formErrors.lastName}</span>
                            )}
                    </div>
                    <div className='location'>
                        <label htmlFor='location'>Location</label>
                        <input
                            className={formErrors.location.length > 0 ? 'error' : null}
                            placeholder='location'
                            type='location'
                            name='location'
                            noValidate
                            onChange={this.handleChange} />
                         {formErrors.location.length > 0 && (
                                <span className='errorMessage'>{formErrors.location}</span>
                            )}   
                    </div>
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
                    <div className='phoneNumber'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input
                            className={formErrors.phoneNumber.length > 0 ? 'error' : null}
                            placeholder='Phone Number'
                            type='phoneNumber'
                            name='phoneNumber'
                            noValidate
                            onChange={this.handleChange} />
                            {formErrors.phoneNumber.length > 0 && (
                                <span className='errorMessage'>{formErrors.phoneNumber}</span>
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
                    </div>
                </form>

            </div>
        </div>;
    }
}