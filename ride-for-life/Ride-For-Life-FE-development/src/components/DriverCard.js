import React from 'react'

export default function DriverCard(props) {

    return(
        <div className='driver-card'>
            <h2>{props.driver.name}</h2>
            <p>Location: {props.driver.location}</p>
        </div>

    )
}