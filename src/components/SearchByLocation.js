import React, { Component } from 'react';
import axios from 'axios'
import DriverCard from "./DriverCard";

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: null,
            drivers: [],
        }
    }


    componentDidMount() {
        this.searchDriver(this.state.query);
    }

    onChange(e) {
        e.preventDefault()
        this.setState({ query: e.target.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.searchDriver(this.state.query);
                }
            } else {
                this.searchDriver(this.state.query);
            }
        })
    }

    searchDriver(query) {
        const url = "https://ride-for-life-bw.herokuapp.com/api/drivers" // api url

        if (query) {
            axios
                .get(url)
                .then(r => {
                    return r.data;
                })
                .then(data => {
                    let drivers = data.filter(drivers => drivers.location === query).map((drivers) => {
                        return (
                            <DriverCard  key={drivers.id} driver={drivers}/>
                        )
                    })
                    this.setState({ drivers: drivers });
                    console.log("state", drivers)
                })
        } else {
            axios
                .get(url)
                .then(r => {
                    return r.data;
                })
                .then(data => {
                    let drivers = data.map(() => { //drivers
                        return ( ''
                        )
                    })
                    this.setState({ drivers: drivers });
                    console.log("state", drivers)
                })
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search driver location..."
                    onChange={this.onChange.bind(this)}
                />
                {this.state.drivers}
            </form>
        )
    }
}