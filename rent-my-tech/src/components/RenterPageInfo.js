import React, {useState} from 'react'
import {connect} from 'react-redux'
import {putRequestCurrentItem} from '../store/actions'
import {useHistory} from "react-router-dom"

const RenterPageInfo = props => {
    const [putPayload, setPutPayload] = useState({
        request: "",
        rentersId: 1
    })

    const history = useHistory()

    const handleNewRequest = () => {
        // PUT ACTION CALL -> update api + state
        // needs request
        setPutPayload({
            ...putPayload, 
            rentersId: props.item.rentersId
        })

        props.putRequestCurrentItem(props.item.id, putPayload)
        setTimeout(() => {
            history.push("/renterPage")
        }, 300)
    }

    const onRequestChange = e => {
        const value = e.target.value
        setPutPayload({
            ...putPayload,
            request: value
        })
    }

    return (
        <>
            <p>Renter Item Info</p>
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Getting info...</p>}
            {props.item && <p>{props.item.techItem}</p> }
            <input 
                type="text"
                value={putPayload.request}
                onChange={onRequestChange}
            />
            <button onClick={handleNewRequest}>Edit Request</button>
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

