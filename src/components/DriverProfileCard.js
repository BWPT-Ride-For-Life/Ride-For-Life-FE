import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const DriverProfileCard = () => {
    const [driverInfo, setDriverInfo] = useState([])
    const [reviews, setReviews] = useState([])
    const id = localStorage.getItem('id')
    const reviewMap = reviews.map(review => <p>Review: {review.review}</p>)

    useEffect(()=>{
        axiosWithAuth()
            .get(`api/drivers/${id}`)
            .then(r => {
                setDriverInfo(r.data)
                setReviews(r.data.reviews)
                // console.log(r.data.reviews)
                // console.log(r)
            })
            .catch(err => console.log(err))
    }, [])
    
    console.log(reviews, 'this is reviews state')
    return (
        <div>
            {/*<DriverInfo info={driverInfo} />*/}
            <div className='profile-card'>
                <h2>{driverInfo.firstName}</h2>
                <img src={driverInfo.avatar} alt='avatar'/>
                <p>Location: {driverInfo.location}</p>
                <p>Price: {driverInfo.price}</p>
                <p>Phone Number: {driverInfo.phoneNumber}</p>
                <p>e-mail: {driverInfo.email}</p>
                <h4>{reviewMap}</h4>
            </div>
        </div>
    )
}

export default DriverProfileCard