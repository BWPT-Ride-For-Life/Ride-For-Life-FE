import React, {useContext} from 'react'
// import DebounceSearch from "./DebounceSearch";
import Search from "./SearchByLocation";
import FormikAddReviewForm from "./ReviewForm";
// import DriverCard from "./DriverCard";
// import {DriverContext} from "../contexts/DriverContext";
import DriverList from "./DriverList";
// // import {axiosWithAuth} from "../utils/AxiosWithAuth";
// import axios from 'axios'
// import {DriverConsumer} from "../contexts/DriverContext";

const UserAccount = () => {
    // const [drivers, setDrivers] = useState([])
    //
    // useEffect(()=>{
    //     axios
    //         .get('https://ride-for-life-bw.herokuapp.com/api/drivers')
    //         .then(r=> {
    //             console.log(r.data, "user account drivers data")
    //             setDrivers(r.data)
    //             console.log(drivers, "drivers state")
    //         })
    //         .catch(err =>{
    //             console.log(err, 'Error fetching data')
    //         })
    // },[])

    // const {drivers} = useContext(DriverContext)

        return (

                <div>
                    {/*<DebounceSearch/>*/}
                    {/*<DriverConsumer>*/}
                    {({drivers}) => <DriverList drivers={drivers}/>}
                    <Search/>
                    {/*</DriverConsumer>*/}
                    <FormikAddReviewForm/>
                </div>

        )
    }
export default UserAccount
