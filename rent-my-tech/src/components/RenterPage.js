// Basic React
import React, {useEffect} from 'react'

// Redux Stuff
import {connect} from 'react-redux'

// Utils
// import {axiosWithAuth} from '../utils/axiosWithAuth'

// Actions
import {getRequestItems} from '../store/actions/'

const RenterPage = props => {
    useEffect(() => {
        props.getRequestItems()
        console.log(props.requestList)
    }, [])

    return(
        <>
            REQ ITEMS PAGE!
        </>
    )
}


// using the token send a get request to api/request
// set the list of items and their info into state using redux
// render those items
// on click of a particular item /api/request/:id -> returns that item object
// from here we can put /api/request/:id, {
//  
//}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        requestList: state.requestList
    }
}

export default connect(mapStateToProps, {getRequestItems})(RenterPage)

