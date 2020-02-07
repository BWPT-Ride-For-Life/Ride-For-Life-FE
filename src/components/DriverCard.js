import React from 'react'

export default function DriverCard(props) {

    return(
        <div className='driver-card'>
            <h2>{props.driver.firstName + ' ' + props.driver.lastName}</h2>
            {/*<p>Location: {props.driver.location}</p>*/}
            {/*<p>Driver ID: {props.id}</p>*/}
            <p>Price: {props.driver.price}</p>
            <p>Phone Number: {props.driver.phoneNumber}</p>
        </div>
    )
}