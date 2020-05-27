// Basic React
import React, {useEffect} from 'react'

// Redux Stuff
import {connect} from 'react-redux'

// Utils
// import {axiosWithAuth} from '../utils/axiosWithAuth'

// Actions
import {getRequestItems} from '../store/actions/'

const RenterPage = props =>  {
    useEffect(() => {
        props.getRequestItems()
    }, [])

    return(
        <>
            <p>Req Page</p>
            {props.isFetching && <p>Fetching Items..</p>} {/*Cool spinner here*/}
            {props.requestList && props.requestList.map(item => {
                return (
                    <div>
                        <p>{item.id}</p>
                        <p>{item.techItem}</p>
                        <p>{item.techDescription}</p>
                        <p>{item.owner}</p>
                        <p>{item.price}</p>
                        <p>{item.request}</p>
                        <p>{item.rentersId}</p>
                        <p>{item.username}</p>
                    </div>
                )
            })}
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
        isFetching: state.getRequestItems.isFetching,
        error: state.getRequestItems.error,
        requestList: state.getRequestItems.requestList
    }
}

export default connect(mapStateToProps, {getRequestItems})(RenterPage)

