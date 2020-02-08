import React, { Component } from 'react';
import axios from 'axios'
import DriverCard from "./DriverCard";
import {axiosWithAuth} from "../utils/AxiosWithAuth";

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: null,
            drivers: [],
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
    }


    componentDidMount() {
        this.searchDriver(this.state.query);
    }

    onChange(e) {
        e.preventDefault()
        this.setState({ query: e.target.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 1 === 0) {
                    this.searchDriver(this.state.query);
                    console.log(this.state.query)
                    console.log(this.state.drivers)
                }
            } else {
                this.searchDriver(this.state.query);
            }
        })
    }

    searchDriver(query) {
        const url = "/api/drivers" // api url

        if (query) {
            axiosWithAuth()
                .get(url)
                .then(r => {
                    console.log(r, 'search response')
                    return r.data;

                })
                .then(data => {
                    console.log(data)
                    let drivers = data.filter(drivers => drivers.location === query).map((drivers) => {
                        return (
                            <DriverCard  key={drivers.id} driver={drivers}/>
                        )
                    })
                    this.setState({ drivers: drivers });
                    console.log(drivers, 'search query state')
                })
                .catch(err => console.log(err, 'error'))
            } /*else {*/
        //     axiosWithAuth()
        //         .get(url)
        //         .then(r => {
        //             return r.data;
        //         })
        //         .then(data => {
        //             let drivers = data.map((drivers) => { //drivers
        //                 return ( ''
        //                 )
        //             })
        //             this.setState({ drivers: drivers });
        //             console.log(drivers, 'search query else')
        //         })
        //         .catch(err => console.log(err, 'error'))
        // }
    }
    showMenu(e) {
        e.preventDefault();
        this.setState({
            showMenu: true,
        });
    }

    render() {
        return (
            <form>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    className="search-box"*/}
                {/*    placeholder="Search driver location..."*/}
                {/*    onChange={this.onChange.bind(this)}*/}
                {/*/>*/}
                <div>
                    <button onClick={this.showMenu}>
                        Search for drivers
                    </button>
                    {this.state.showMenu
                        ? (<div className="menu">
                                <button onClick={this.onChange.bind(this)} value='Kira'> Kira </button>
                                <button onClick={this.onChange.bind(this)} value='Kampala'> Kampala </button>
                                <button onClick={this.onChange.bind(this)} value='Nansana'> Nansana </button>
                            </div>
                        ) : null
                    }
                </div>
                {this.state.drivers}
            </form>
        )
    }
}