import React, { Component } from "react";
import { Redirect, Link }  from 'react-router-dom'
import '../App.css';
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import { DropDownList } from '@progress/kendo-react-dropdowns'
// import EventsLogger from './EventsLogger'

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const formValid = ({formErrors, ...rest}) => {
    let valid = true;
//This validates empty form errors
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
        Object.values(rest).forEach(val =>{
            val === null && (valid = false)
        });
    });
    return valid;
};

//     Object.values(formErrors, rest).forEach(val => {
//         (val.length > 0 || val.length === null ) && (valid = false)
//         return valid
// };

//This validates filled forms

export default class DriverRegistration extends Component {
    // source = ['Kira', 'Kampala', 'Nansana']
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            location_id: null,
            price: null,
            email: null,
            phoneNumber: null,
            password: null,
            redirect: false,
            // events: [],
            formErrors: {
                firstName: "",
                lastName: "",
                location_id: "",
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
        Last Name: ${this.state.lastName}
        Location: ${this.state.location_id}
        Price: ${this.state.price}
        Email: ${this.state.email}
        Phone Number: ${this.state.phoneNumber}
        Password: ${this.state.password}
        `)
        let info = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location_id: this.state.location_id,
            price: this.state.price,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        axiosWithAuth()
            .post('api/auth/register-driver', info)
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
            return <Redirect to='DriverAccount'/>
        }
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3  ? 'minimum 3 characters required' : '';
                break;
            case 'lastName':
                formErrors.lastName = value.length < 3  ? 'minimum 3 characters required' : '';
                break;
            case 'location':
                formErrors.location_id = value.length < 1 ? 'minimum 10 characters required' : '';
                break;
            case 'price':
                formErrors.price = value.length < 6 ? 'minimum 6 characters required' : '';
                break;
            case 'email':
                formErrors.email = emailIsValid(value) ? '' : 'email invalid';
                break;
            case 'phoneNumber':
                formErrors.phoneNumber = value.length < 10 ? 'minimum 11 characters required' : '';
                break;
            case 'password':
                formErrors.password = value.length < 8 ? 'minimum 8 characters required' : '';
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state))

    };
    // //dropdown menu stuff
    // onOpen = () => { this.log('open'); }
    // onClose = () => { this.log('close'); }
    // onFocus = () => { this.log('focus'); }
    // onBlur = () => { this.log('blur'); }
    // onChange = (event) => { this.log('change', event.target.id); }
    // onFilterChange = (event) => { this.log('filterChange', event.filter.id + 1); }
    // //more dropdown stuff
    // log(event, arg) {
    //     const events = this.state.events;
    //     events.unshift(`${event} ${arg || ""}`);
    //
    //     this.setState({
    //         events: events
    //     });
    // }

    render() {

        const {formErrors} = this.state;
        
        return <div className='wrapper'>
            {this.renderRedirect()}
            <div className='form-wrapper'>
                <h1>Create Driver Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='firstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            className={formErrors.firstName.length > 0 ? 'error' : null}
                            placeholder='First Name'
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
                    {/*<DropDownList*/}
                    {/*    data={this.source}*/}
                    {/*    onOpen={this.onOpen}*/}
                    {/*    onClose={this.onClose}*/}
                    {/*    onFocus={this.onFocus}*/}
                    {/*    onBlur={this.onBlur}*/}
                    {/*    onChange={this.onChange}*/}
                    {/*    onFilterChange={this.onFilterChange}*/}
                    {/*    filterable={true}*/}
                    {/*>Location</DropDownList>*/}
                    {/*<br />*/}
                    {/*<br />*/}
                    {/*<EventsLogger events={this.state.events} />*/}
                    <div className='location'>
                        <label htmlFor='location_id'>Location</label>
                        <input
                            className={formErrors.location_id.length > 0 ? 'error' : null}
                            placeholder='1: Kampala, 2: Kira, 3: Nansana'
                            type='number'
                            name='location_id'
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.location_id.length > 0 && (
                            <span className='errorMessage'>{formErrors.location_id}</span>
                        )}
                    </div>
                    <div className='price'>
                        <label htmlFor='price'>Price</label>
                        <input
                            className={formErrors.price.length > 0 ? 'error' : null}
                            placeholder='Price'
                            type='price'
                            name='price'
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.price.length > 0 && (
                            <span className='errorMessage'>{formErrors.price}</span>
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
                        <Link to='/login'>Click here</Link>
                    </div>
                </form>
            </div>
        </div>;
    }
}

// class EventsLogger extends Component {
//     render() {
//         return (
//             <div className="example-config">
//                 <h5>Event log</h5>
//                 <ul className="event-log" style={{ textAlign: 'right' }}>
//                     {this.props.events.map(function(event, index) {
//                         return (<li key={index}>{event}</li>);
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }