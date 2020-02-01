import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { DriverContext } from './contexts/DriverContext'
import {axiosWithAuth} from "./utils/AxiosWithAuth";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login'

function App() {
    const [rideForLife, setRideForLife] = useState([])

    // useEffect(()=>{
    //     axiosWithAuth()
    //         .get('api/drivers')
    //         .then(r=> {
    //             console.log(r.data)
    //             setRideForLife(r.data)
    //         })
    //         .catch(err =>{
    //             console.log(err, 'Error fetching data')
    //         })
    // },[])

  return (
      <DriverContext.Provider value={{ rideForLife }}>
          <header className="App-header">
              <h1>Ride for Life</h1>
          </header>
        <Router className="App">
            <Route exact path='/login' component={Login} />
        </Router>
      </DriverContext.Provider>
);
}

export default App;
