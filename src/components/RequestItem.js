import React from 'react'
import { getRequestCurrentItem } from '../store/actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 20%;
  margin: 2%;
`;

const RequestItem = props => {
    const { item } = props
    const history = useHistory()

    const onClickHandler = evt => {
        // Action call that sends a get request to /api/request/:id
        // then route to /RequestItemInfo page
        props.getRequestCurrentItem(item.id)
        setTimeout(() => history.push("/renterPageInfo"), 500)
    }

    // Simon can touch up this component
    return (
        <StyledCard >
            <CardContent onClick={onClickHandler}>
                <Typography variant="h5" component="h2">
                    {item.techItem}
                </Typography>
                <Typography variant="subtitle2">
                    Owned by {item.owner}
                </Typography>
                <br></br>
                <Typography variant="body2" component="p">
                    {item.techDescription}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                    Request Msg: {item.request}
                </Typography>
                <br></br>
                <Typography variant="caption">
                    {item.price}
                </Typography>
            </CardContent>
        </StyledCard>
    )
}

export default connect(null, {getRequestCurrentItem})(RequestItem)