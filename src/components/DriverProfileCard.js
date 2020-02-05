import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import DriverInfo from "./DriverInfo";

const DriverProfileCard = () => {
    const [driverInfo, setDriverInfo] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get('api/drivers/:id')
            .then(r => {
                setDriverInfo(r.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <DriverInfo info={driverInfo} />
        </div>
    )
}

export default DriverProfileCard