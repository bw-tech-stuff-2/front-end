import {
    GET_REQUEST_ITEMS_START,
    GET_REQUEST_ITEMS_SUCCESS,
    GET_REQUEST_ITEMS_FAIL
} from '../actions/'

const initalState = {
    isFetching: false,
    error: "",
    requestList: []
}

export const getRequestItems = (state=initalState, action) => {
    switch(action.type) {
        case GET_REQUEST_ITEMS_START:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error
            }
        case GET_REQUEST_ITEMS_SUCCESS:
            // console.log(action.payload.requestList)
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
                requestList: action.payload.requestList
            }
            
        case GET_REQUEST_ITEMS_FAIL:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }
        default: {
            return {
                ...state
            }
        }
    }
}