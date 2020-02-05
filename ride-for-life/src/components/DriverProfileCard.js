import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const DriverProfileCard = () => {
    const [driverInfo, setDriverInfo] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get('api/driver/$id')
            .then(r => {
                setDriverInfo(r.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {/*<DriverInfo info={driverInfo} />*/}
        </div>
    )
}

export default DriverProfileCard