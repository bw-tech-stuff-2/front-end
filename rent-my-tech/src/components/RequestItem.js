import React from 'react'
import { getRequestCurrentItem } from '../store/actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

const RequestItem = props => {
    const {item} = props
    const history = useHistory()

    const onClickHandler = evt => {
        // Action call that sends a get request to /api/request/:id
        // then route to /RequestItemInfo page
        props.getRequestCurrentItem(item.id)
        history.push("/renterPageInfo")
    }

    // Simon can touch up this component
    return (
        <div onClick={onClickHandler}>
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
}

export default connect(null, {getRequestCurrentItem})(RequestItem)