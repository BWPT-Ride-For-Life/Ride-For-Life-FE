import React, { Component } from "react";
//import './App.css';
import axios from 'axios';

export class DriverRegistration extends React.Component{
    constructor (props){
      super(props)
      this.state ={
        firstName: "",
        lastName: "",
        location: "",
        price: "",
        email: "",
        phoneNumber: '',
        password: '',
            firstNameError: "",
            lastNameError: "",
            locationError: "",
            priceErrorError: "",
            emailError: "",
            phoneNumberError: "",
            passwordError: ""  
      };
    }
    
  
    handleChange = (event) =>{
      this.setState({
          [event.target.name]: event.target.value});
      }
  
    validate =()=>{
   let firstNameError = "";
    let lastNameError = "";
    // let locationError = "";
    // let priceError = "";
    let emailError = "";
    // let phoneNumberError = "";
    // let passwordError = "";

    if (!this.state.firstName){
      firstNameError = '';
    }
    if (!this.state.lastName){
      lastNameError = '';
    }

    if (!this.state.email.includes('@')){
      emailError = 'invalid email';
    }
    if (emailError || firstNameError ||lastNameError){
      this.setState({emailError, firstNameError, lastNameError});
      return false;
    }
    return true;
  };


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
          console.log(this.state);
       //clear form 
       axios.post(`api/drivers/`, this.state)
       .then(response => {
         console.log(response)
       })
       .catch(error => {
         console.log(error)
       })
      }
    }
  
        submit(){
          let obj={}

        obj.firstame= this.state.firstName;
        obj.lastame= this.state.lastName;
        obj.location= this.state.location;
        obj.price=this.state.price;
        obj.email=this.state.email;
        obj.firstame=this.state.phoneNumber;
        obj.firstame=this.state.password;
        
    }

    
      
    render() {
      const {firstName, lastName, location, price, email, phoneNumber, password} = this.state  
        return <div className='wrapper'>
            <div className='form-wrapper'>
                <h1>Driver Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='firstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            name='firstName'
                            placeholder='First Name'
                            type='firstName'
                            value={firstName}
                           onChange= {this.handleChange} />
                        <div style={{fontSize: 10, color: 'red'}}>{this.state.firstNameError}</div>    
                    </div>
                    <div className='lastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            name='lastName'
                            placeholder='Last Name'
                            type='lastName'
                            value={lastName}

                            onChange={this.handleChange} />         
                    </div>
                    <div className='location_id'>
                        <label htmlFor='location_id'>Location</label>
                        <select>
  <option selected value="Select One">Select One</option>
  <option value="id_1">Kampala</option>
  <option value="id_2">Nansana</option>
  <option value="id_3">Kira</option>
</select>  
    {this.handleChange} 
                            
                    </div>
                    <div className='price'>
                        <label htmlFor='price'>Price</label>
                        <input
                            name='price'
                            placeholder='$Price'
                            type='price'
                            value={price}

                            onChange={this.handleChange} />
                                
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>Email</label>
                        <input
                            name='email'
                            placeholder='Email'
                            type='email'
                            value={email}

                            onChange={this.handleChange} />
                                
                    </div>
                    <div className='phoneNumber'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input
                            name='phoneNumber'
                            placeholder='Phone Number'
                            type='phoneNumber'
                            value={phoneNumber}

                            noValidate
                            onChange={this.handleChange} />
                               
                    </div>
                    <div className='password'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='password'
                            placeholder='Password'
                            type='password'
                            password={password}

                            onChange={this.handleChange} />
                                 
                            
                            
                    </div>
                    <div className='createAccount'>
                        <button onClick={() => this.submit()}type='submit'>Submit</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>

            </div>
        </div>;
    }
}

export default DriverRegistration
        

    

    