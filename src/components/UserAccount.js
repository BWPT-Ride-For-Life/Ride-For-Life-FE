import React from 'react'
import DebounceSearch from "./DebounceSearch";
import Search from "./SearchByLocation";

export default class UserAccount extends React.component {
    render() {
        return (
            <div>
                <DebounceSearch />
                <Search />
            </div>
        )
    }
}