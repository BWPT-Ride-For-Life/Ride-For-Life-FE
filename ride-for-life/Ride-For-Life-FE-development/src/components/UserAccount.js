import React from 'react'
import DebounceSearch from "./DebounceSearch";
import Search from "./SearchByLocation";

const UserAccount = () => {
    return (
        <div>
            <DebounceSearch/>
            <Search/>
        </div>
    )
}
export default UserAccount
