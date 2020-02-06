import React from 'react'
import DebounceSearch from "./DebounceSearch";
import Search from "./SearchByLocation";
import FormikAddReviewForm from "./ReviewForm";

const UserAccount = () => {
    return (
        <div>
            <DebounceSearch/>
            <Search/>
            <FormikAddReviewForm/>
        </div>
    )
}
export default UserAccount
