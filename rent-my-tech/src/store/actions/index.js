import {axiosWithAuth} from '../../utils'

export const GET_TOKEN_START = "GET_TOKEN_START"
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS"
export const GET_TOKEN_FAIL = "GET_TOKEN_FAIL"

export const getTokenRealQuick = user => dispatch => {
    dispatch({type: GET_TOKEN_START, payload: {error: "", isFetching: true}})
    axiosWithAuth.post("/api/renters/auth/login", user)
        .then(res => {
            dispatch({type: GET_TOKEN_SUCCESS, payload: {token: res.data.token, error: "", isFetching: false}})
        })
        .catch(() => {
            dispatch({type: GET_TOKEN_FAIL, payload: {error: "SOMETHING WENT HORRIBLY WRONG...", isFetching: false}})
        })
}