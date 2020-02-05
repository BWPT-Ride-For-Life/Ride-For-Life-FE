import React from 'react'



export default function DriverInfo(props) {

    // props.drivers.reviews = {review: ''};

    props.drivers.reviews = props.reviews.map((review) => <p key={review}>{review}</p>)

    return(
        <div className='profile-card'>
            <h2>{props.drivers.name}</h2>
            <h4>{props.drivers.avatar}</h4>
            <p>Location: {props.drivers.location}</p>
            <p>Price: {props.drivers.price}</p>
            <p>Phone Number: {props.drivers.phoneNumber}</p>
            <p>e-mail: {props.drivers.email}</p>
            <p>Reviews: {props.drivers.reviews}</p>
        </div>
    )
}