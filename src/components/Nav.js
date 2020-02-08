import React from "react";
import {Link} from 'react-router-dom'

export default function Nav(){
    return (
        <div>
            <h3>Welcome to Ride for Life, login or register an account to continue!</h3>
            <Link to='/Login'>Login</Link>
            <br />
            <Link to='/RegisterDriver'>Driver Registration</Link>
            <br />
            <Link to='/RegisterUser'>User Registration</Link>
        </div>
    )
}