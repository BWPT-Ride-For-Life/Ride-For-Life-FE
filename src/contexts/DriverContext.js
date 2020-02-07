import React, {createContext, useEffect, useState} from 'react';
import {axiosWithAuth} from "../utils/AxiosWithAuth";

export const DriverContext = createContext([]);
export const DriverConsumer = DriverContext.Consumer;

// export class DriverProvider extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             drivers: []
//         }
//     }
// // export const DriverProvider = () => {
// //
// //     const [drivers, setDrivers] = useState([])
//
//     useEffect(()=>{
//         axiosWithAuth()
//             .get('api/drivers')
//             .then(r => {
//                 console.log('this is r.data', r.data)
//                 this.setState(driversr.data)
//                 console.log('drivers', drivers)
//             })
//             .catch(err =>{
//             console.log(err, 'Error fetching data')
//             })
//     }, [])
//     render(){
//         return (
//             <DriverContext.Provider value={drivers}>
//                 {drivers.children}
//             </DriverContext.Provider>
//         )
//     }
// }
