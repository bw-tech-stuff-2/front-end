import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {putRequestCurrentItem} from '../store/actions'
import {useHistory} from "react-router-dom"
import { Card, CardContent, Typography, TextField, Button, Grid } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 50%;
  margin: 0 auto;
  margin-top: 2%;
`;

const StyledGrid = styled(Grid)`
    margin-top: 2%;
`
const StyledButton = styled(Button)`
    margin-left: 2%;
    border: 1px solid red;
`

const RenterPageInfo = props => {
    const [putPayload, setPutPayload] = useState({
        request: "",
        rentersId: 1
    })
    const history = useHistory()

    useEffect(() => {
        // check if component has content
        // if not route to /renterPage
        if (props.item.techItem == null) {
            history.push("/renterPage")
        }
    })

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
        }, 500)
    }

    const onRequestChange = e => {
        const value = e.target.value
        setPutPayload({
            ...putPayload,
            request: value
        })

        console.log(props.error)
    }

    return (
        <>
        <StyledCard >
            <CardContent >
                <Typography variant="h5" component="h2">
                    {props.item.techItem}
                </Typography>
                <Typography variant="subtitle2">
                    Owned by {props.item.owner}
                </Typography>
                <br></br>
                <Typography variant="body2" component="p">
                    {props.item.techDescription}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                    Request Msg: {putPayload.request}
                </Typography>
                <br></br>
                <Typography variant="caption">
                    {props.item.price}
                </Typography>
            </CardContent>
        </StyledCard>
        <StyledGrid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <TextField 
                variant="outlined"
                value={putPayload.request}
                onChange={onRequestChange}
            />
            <StyledButton
                variant="contained"
                color="primary"
                onClick={handleNewRequest}

            >Edit Request</StyledButton>
        </StyledGrid>
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

