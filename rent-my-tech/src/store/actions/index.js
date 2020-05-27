import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const GET_REQUEST_ITEMS_START = "GET_REQUEST_ITEMS_START"
export const GET_REQUEST_ITEMS_SUCCESS = "GET_REQUEST_ITEMS_SUCCESS"
export const GET_REQUEST_ITEMS_FAIL = "GET_REQUEST_ITEMS_FAIL"

export const GET_REQUEST_CURRENT_ITEM_START = "GET_REQUEST_CURRENT_ITEM_START"
export const GET_REQUEST_CURRENT_ITEM_SUCCESS = "GET_REQUEST_CURRENT_ITEM_SUCCESS"
export const GET_REQUEST_CURRENT_ITEM_FAIL = "GET_REQUEST_CURRENT_ITEM_FAIL"

export const getRequestItems = () => {
    return dispatch => {
        dispatch({type: GET_REQUEST_ITEMS_START, payload: {error: "", isFetching: true}})
        axiosWithAuth()
            .get("/api/request")
            .then(res => {
                dispatch({type: GET_REQUEST_ITEMS_SUCCESS, payload: {error: "", isFetching: false, requestList: res.data}})
            })
            .catch(() => {
                dispatch({type: GET_REQUEST_ITEMS_FAIL, payload: {error: "SOMETHING WENT HORRIBLY WORNG", isFetching: false}})
            })
    }
}

export const getRequestCurrentItem = id => {
    return dispatch => {
        dispatch({type: GET_REQUEST_CURRENT_ITEM_START, payload: {error: "", isFetching: true}})
        axiosWithAuth()
            .get(`api/request/${id}`)
            .then(res => {
                dispatch({type: GET_REQUEST_CURRENT_ITEM_SUCCESS, payload: {error: "", isFetching: false, currentRequestItem: res.data}})
            })
            .catch(() => {
                dispatch({type: GET_REQUEST_CURRENT_ITEM_FAIL, payload: {error: "TRY COMING FROM RENTERPAGE", isFetching: false}})
            })
    }
}