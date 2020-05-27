// Basic React
import React from 'react'

// Redux Stuff
import {connect} from 'react-redux'

// Actions
import {getTokenRealQuick} from '../store/actions/'

const hardCodedUser = {
    username: "flyguy",
    password: "backtothefuture",
    renterName: "Marty McFly"
}

class RenterPage extends React.Component{

    // Lifecycle Method
    componentDidMount() {
        this.props.getTokenRealQuick(hardCodedUser) // set the token into the redux store
    }

    render(){
        return(
            <>
            </>
        )
    }
}

// returns the token -> set into our state using redux 

// using the token send a get request to api/request
// set the list of items and their info into state using redux
// render those items
// on click of a particular item /api/request/:id -> returns that item object
// from here we can put /api/request/:id, {
//  
//}

const mapStateToProps = state => {
    return {
        token: state.token,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getTokenRealQuick})(RenterPage)

