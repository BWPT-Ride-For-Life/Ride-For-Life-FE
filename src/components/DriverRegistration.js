import React, { Component } from "react";


const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
export default class ValidationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            price: '',
            email: '',
            phoneNumber: '',
            password: '',
            firstNameError: '',
            lastNameError: '',
            locationError: '',
            priceError: '',
            emailError: '',
            phoneNumberError: '',
            passwordError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    //   handleChange = e => {
    //     e.preventDefault();
    //     const { name, value } = e.target.type;
    //     let formErrors = this.state.formErrors;
    //     switch (name) {
    //         case 'firstName':
    //             formErrors.firstName = value.length < 6  ? 'minimum 6 characters required' : '';
    //             break;
    //         case 'lastName':
    //             formErrors.lastName = value.length < 8  ? 'minimum 8 characters required' : '';
    //             break;
    //         case 'location':
    //             formErrors.location = value.length < 10 ? 'minimum 10 characters required' : '';
    //             break;
    //         case 'price':
    //             formErrors.price = value.length < 6 ? 'minimum 6 characters required' : '';
    //             break;
    //         case 'email':
    //             formErrors.email = emailIsValid(value) ? '' : 'email invalid';
    //             break;
    //         case 'phoneNumber':
    //             formErrors.phoneNumber = value.length < 11 ? 'minimum 11 characters required' : '';
    //             break;
    //         case 'fpassword':
    //             formErrors.password = value.length < 8 ? 'minimum 6 characters required' : '';
    //             break;
    //         default:
    //             break;
    //     }

    // };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Location: ${this.state.location}
        Price: ${this.state.price}
        Email: ${this.state.email}
        Phone Number: ${this.state.phoneNumber}
        Password: ${this.state.password}
        `)
        } else {
            console.error('FORM INVALID - ERROR')
        }
    };



    render() {
       

            return (
                <div className='wrapper'>
                    <div className='form-wrapper'>
                        <h1>Rider Account</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className='firstName'>
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type='text'
                                    firstname='firstname'
                                    placeholder='First Name'
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleChange} />
                            </div>
                            <div className='lastName'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    lastName='lastname'
                                    placeholder='Last Name'
                                    type='lastName'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleChange} />
                            </div>
                            <div className='location'>
                                <label htmlFor='location'>Location</label>
                                <select>
                                    <option selected value="Select Location">Select Location</option>
                                    <option value="id_1">Kampala</option>
                                    <option value="id_2">Nansana</option>
                                    <option value="id_3">Kira</option>
                                </select>
                               {this.state.location}
                                {this.handleChange}
                            </div>
                            <div className='email'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    className='email'
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </div>
                            <div className='phoneNumber'>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input
                                    className='phoneNumber'
                                    placeholder='555-555-5555'
                                    type='phoneNumber'
                                    name='phoneNumber'
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange} />
                                
                            </div>
                            <div className='password'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    className='password'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>
                            <div className='createAccount'>
                                <button type='submit'>Create Account</button>
                                <small>Already Have an Account?</small>
                            </div>
                        </form>
                    </div>

                </div>
            )
        }
    }







// const formValid = ({formErrors, 
//   firstName, 
//   lastName, 
//   location, 
//   price, 
//   email, 
//   phoneNumber, 
//   password}) => {
//     let valid = true;


// This validates empty form errors
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });
//     return valid;
// };
// //This validates filled forms
// Object.value=(firstName, 
// lastName, 
// location, 
// price, 
// email, 
// phoneNumber, 
// password).forEach(val =>{
//     val === null && (valid = false)
// });


