import React, {useEffect, useState} from 'react';
import './App.css';
// import {DriverContext} from './contexts/DriverContext'
import {axiosWithAuth} from "./utils/AxiosWithAuth";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login'
import DriverAccount from "./components/DriverAccount";
import UserAccount from "./components/UserAccount";
import ProtectedRoute from "./utils/ProtectedRoute";
import DriverRegistration from "./components/DriverRegistration";
import UserRegistration from "./components/UserRegistration";

function App() {

    const [drivers, setDrivers] = useState([])


    useEffect(()=>{
        axiosWithAuth()
            .get('api/drivers')
            .then(r=> {
                console.log(r.data, 'response data')
                setDrivers(r.data)
                console.log(drivers, 'state of drivers in App.js')
            })
            .catch(err =>{
                console.log(err, 'Error fetching data')
            })
    },[])
  return (

      <div>
          <header className="App-header">
              <h1>Ride for Life</h1>
              {/*<DriverRegistration />*/}
          </header>
        <Router className="App">
            <Route exact path='/RegisterDriver' component={DriverRegistration}/>
            <Route exact path='/RegisterUser' component={UserRegistration}/>
            <Route exact path='/Login' component={Login} />
            {/*<DriverContext.Provider value={drivers}>*/}
                <ProtectedRoute path='/DriverAccount' component={DriverAccount} drivers={drivers}/>
                <ProtectedRoute path='/UserAccount' component={UserAccount}/>
            {/*</DriverContext.Provider>*/}
        </Router>
      </div>
)
  }
  export default App