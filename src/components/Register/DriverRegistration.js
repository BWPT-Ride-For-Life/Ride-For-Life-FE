import React, { Component } from "react";
//import './App.css';
export  class DriverRegistration extends React.Component{
    constructor (props){
      super(props)
      this.state ={
        isDriverRegistrationActive: true,
        firstName: '',
        lastName: '',
        location: '',
        price: '',
        email: '',
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
      this.handleSubmit=this.handleSubmit.bind(this)
    }
    
  
    handleFirstNameChange = (event) =>{
      this.setState({
          firstName:event.target.value
        })
    }
    handleLastNameChange = (event) =>{
      this.setState({
          lastName:event.target.value
        })
    }
    handleLocationChange = (event) =>{
      this.setState({
          location:event.target.value
        })
    }
    handlePriceChange = (event) =>{
      this.setState({
          price:event.target.value
        })
    }
    handleEmailChange = (event) =>{
      this.setState({
          email:event.target.value
        })
    }
    handlePhoneNumberChange = (event) =>{
      this.setState({
          phoneNumber:event.target.value
        })
    }
    handlePasswordChange = (event) =>{
      this.setState({
          password:event.target.value
        })
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
          this.setState({
            firstName: '',
            lastName: '',
            location: '',
            price: '',
            email: '',
            phoneNumber: '',
            password: '' 
          })
       //clear form 
  
      }
    }
  
  
    //     submit(){
    //       let obj={}
    //     obj.firstame= this.state.firstName;
    //     obj.lastame= this.state.lastName;
    //     obj.location= this.state.location;
    //     obj.price=this.state.price;
    //     obj.email=this.state.email;
    //     obj.firstame=this.state.phoneNumber;
    //     obj.firstame=this.state.password;
        
    // }
    
      
    render(){
 
        return <div className='wrapper' ref={this.props.wrapperRef}>
            <div className='form-wrapper'>
                <h1>Driver Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='firstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            name='firstName'
                            placeholder='First Name'
                            type='firstName'
                            value={this.state.firstName}
                           onChange= {this.handleFirstNameChange} />
                        <div style={{fontSize: 10, color: 'red'}}>{this.state.firstNameError}</div>    
                    </div>
                    <div className='lastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            name='lastName'
                            placeholder='Last Name'
                            type='lastName'
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange} />         
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
                            value={this.state.price}
                            onChange={this.handlePriceChange} />
                                
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>Email</label>
                        <input
                            name='email'
                            placeholder='Email'
                            type='email'
                            email='email'
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                                
                    </div>
                    <div className='phoneNumber'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input
                            name='phoneNumber'
                            placeholder='Phone Number'
                            type='phoneNumber'
                            phoneNumber='phoneNumber'
                            value={this.state.phoneNumber}
                            onChange={this.handlePhoneNumberChange} />
                               
                    </div>
                    <div className='password'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='password'
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handlePasswordChange} />
                                 
                            
                            
                    </div>
                    <div className='createAccount'>
                        <button type='submit'>Submit</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>
        </div>;
    }
}
export default DriverRegistration