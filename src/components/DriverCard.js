import React from 'react'
// import {axiosWithAuth} from "../utils/AxiosWithAuth";

export default function DriverCard(props) {

    // axiosWithAuth()
    //     .get(`api/drivers/${props.target.id}`)
    //     .then(r => console.log(r))

    return(
        <div className='driver-card'>
            <h2><a src=''>{props.driver.firstName + ' ' + props.driver.lastName}</a></h2>
            {/*<p>Location: {props.driver.location}</p>*/}
            {/*<p>Driver ID: {props.driver.id}</p>*/}
            <p>Price: {props.driver.price}</p>
            <p>Phone Number: {props.driver.phoneNumber}</p>
        </div>
    )
}