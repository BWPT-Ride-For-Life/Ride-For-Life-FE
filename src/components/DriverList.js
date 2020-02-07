import React, {useContext} from 'react'

import {DriverContext} from "../contexts/DriverContext";
import DriverCard from "./DriverCard";

const DriverList = () => {
    const {drivers} = useContext(DriverContext)
    return (
        <div className="driver-list">
            {drivers.map(driver =>
            <DriverCard key={driver.id} driver={driver}/>
            )}
        </div>
    )
}
export default DriverList