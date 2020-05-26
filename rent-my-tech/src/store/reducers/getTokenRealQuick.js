import {
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL
} from "../actions"

const initalState = {
    token: null,
    isFetching: false,
    error: "",
}

export const getTokenRealQuick = (state=initalState, action) => {
    switch(action.type) {
        case GET_TOKEN_START:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error
            }
        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
                token: action.payload.token
            }
        case GET_TOKEN_FAIL: 
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }
        default:
            return (
                {...state}
            )
    }
}