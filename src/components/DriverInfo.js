import React from 'react'


export default function DriverInfo(props) {

    // let reviews = props.reviews.map((review) => <p key={review}>Review: {review}</p>)

    return(
        <div className='profile-card'>
            <h2>{props.firstName}</h2>
            <h4>{props.avatar}</h4>
            <p>Location: {props.location_id}</p>
            <p>Price: {props.price}</p>
            <p>Phone Number: {props.phoneNumber}</p>
            <p>e-mail: {props.email}</p>
            {/*<p>Reviews: {reviews}</p>*/}
        </div>
    )
}