import React from 'react'

const RequestItem = props => {
    const {item} = props

    const onClickHandler = evt => {
        // Action call that sends a get request to /api/request/:id
        // then route to /RequestItemInfo page
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

export default RequestItem