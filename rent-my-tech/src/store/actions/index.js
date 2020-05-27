import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const SET_TOKEN = "SET_TOKEN"
export const GET_REQUEST_ITEMS_START = "GET_REQUEST_ITEMS_START"
export const GET_REQUEST_ITEMS_SUCCESS = "GET_REQUEST_ITEMS_SUCCESS"
export const GET_REQUEST_ITEMS_FAIL = "GET_REQUEST_ITEMS_FAIL"

export const setToken = token => {
    return {type: SET_TOKEN, payload: token}
}

export const getRequestItems = () => {
    return dispatch => {
        dispatch({type: GET_REQUEST_ITEMS_START, payload: {error: "", isFetching: true}})
        axiosWithAuth().get("/api/request")
        .then(res => {
            dispatch({type: GET_REQUEST_ITEMS_SUCCESS, payload: {error: "", isFetching: false, requestList: res.data}})
        })
        .catch(() => {
            dispatch({type: GET_REQUEST_ITEMS_FAIL, payload: {error: "SOMETHING WENT HORRIBLY WORNG", isFetching: false}})
        })
    }
}