import React from 'react'
import {connect} from 'react-redux'
import {putRequestCurrentItem} from '../store/actions'

const RenterPageInfo = props => {

    const handleNewRequest = () => {
        // PUT ACTION CALL -> update api + state
        props.putRequestCurrentItem(props.item.id)
        // Route user back to RenterPage
    }

    return (
        <>
            <p>Renter Item Info</p>
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Getting info...</p>}
            {props.item && <p>{props.item.techItem}</p> }
            <input 
                type="text"
            />
            <button onClick={handleNewRequest}>Edit/Add New Request</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        item: state.request.currentRequestItem,
        error: state.request.error,
        isFetching: state.request.isFetching
    }
}

export default connect(mapStateToProps, {putRequestCurrentItem})(RenterPageInfo)

