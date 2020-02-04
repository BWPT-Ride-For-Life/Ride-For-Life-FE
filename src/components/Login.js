import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const emptyForm = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [info, setInfo] = useState(emptyForm)
    const [userType, setUserType] = useState('')
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/auth/login', info)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload);
                setInfo(emptyForm)
                setUserType(res.data)
                if (('driverID' in userType)) {
                    props.history.push('/DriverAccount')
                } else {
                    props.history.push('/UserAccount')
                }
                console.log(res.data)
            })
            .catch(error => console.log(error, "Login Error"))
    }
    return (
        <div className="RideApp">
            <h1>Welcome to Ride for Life, Please sign in!</h1>
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <div className="loginForm">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={info.username}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={info.password}
                            onChange={handleChange}
                        />
                        <button className="button" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;