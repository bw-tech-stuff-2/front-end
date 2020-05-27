import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {useHistory} from 'react-router-dom'

//Calebs Actions
export const GET_REQUEST_ITEMS_START = "GET_REQUEST_ITEMS_START";
export const GET_REQUEST_ITEMS_SUCCESS = "GET_REQUEST_ITEMS_SUCCESS";
export const GET_REQUEST_ITEMS_FAIL = "GET_REQUEST_ITEMS_FAIL";

export const GET_REQUEST_CURRENT_ITEM_START = "GET_REQUEST_CURRENT_ITEM_START";
export const GET_REQUEST_CURRENT_ITEM_SUCCESS = "GET_REQUEST_CURRENT_ITEM_SUCCESS";
export const GET_REQUEST_CURRENT_ITEM_FAIL = "GET_REQUEST_CURRENT_ITEM_FAIL";

export const PUT_REQUEST_CURRENT_ITEM_START = "PUT_REQUEST_CURRENT_ITEM_START"
export const PUT_REQUEST_CURRENT_ITEM_SUCCESS = "PUT_REQUEST_CURRENT_ITEM_SUCESS"
export const PUT_REQUEST_CURRENT_ITEM_FAIL = "PUT_REQUEST_CURRENT_ITEM_FAIL"

//Codys Actions
export const GET_TECH_ITEMS_START = "GET_TECH_ITEMS_START";
export const GET_TECH_ITEMS_SUCCESS = "GET_TECH_ITEMS_SUCCESS";
export const GET_TECH_ITEMS_FAIL = "GET_TECH_ITEMS_FAIL";

export const GET_TECH_CURRENT_ITEM_START = "GET_TECH_CURRENT_ITEM_START";
export const GET_TECH_CURRENT_ITEM_SUCCESS = "GET_TECH_CURRENT_ITEM_SUCCESS";
export const GET_TECH_CURRENT_ITEM_FAIL = "GET_TECH_CURRENT_ITEM_FAIL";

//Calebs Functions

export const getRequestItems = () => {
  return (dispatch) => {
    dispatch({
      type: GET_REQUEST_ITEMS_START,
      payload: { error: "", isFetching: true },
    });
    axiosWithAuth()
      .get("/api/request")
      .then((res) => {
        dispatch({
          type: GET_REQUEST_ITEMS_SUCCESS,
          payload: { error: "", isFetching: false, requestList: res.data },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_REQUEST_ITEMS_FAIL,
          payload: {
            error: "SOMETHING WENT HORRIBLY WORNG",
            isFetching: false,
          },
        });
      });
  };
};

export const getRequestCurrentItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_REQUEST_CURRENT_ITEM_START,
      payload: { error: "", isFetching: true },
    });
    axiosWithAuth()
      .get(`api/request/${id}`)
      .then((res) => {
        dispatch({
          type: GET_REQUEST_CURRENT_ITEM_SUCCESS,
          payload: {
            error: "",
            isFetching: false,
            currentRequestItem: res.data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_REQUEST_CURRENT_ITEM_FAIL,
          payload: { error: "TRY COMING FROM RENTERPAGE", isFetching: false },
        });
      });
  };
};

export const putRequestCurrentItem = (id, putPayload) => {
    return dispatch => {
        dispatch({type: PUT_REQUEST_CURRENT_ITEM_START, payload: {error: "", isFetching: true}})
        axiosWithAuth()
            .put(`/api/request/${id}`, putPayload)
            .then(() => {
                dispatch({type: PUT_REQUEST_CURRENT_ITEM_SUCCESS, payload: {error: "", isFetching: false}})
            })
            .catch(() => {
                dispatch({type: PUT_REQUEST_CURRENT_ITEM_FAIL, payload: {error: "TRY COMING FROM /renterPage instead", isFetching: false}})
            })
    }
}

//Codys Functiions

export const getTechItems = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TECH_ITEMS_START,
      payload: { error: "", isFetching: true },
    });
    axiosWithAuth()
      .get("/api/tech")
      .then((res) => {
        dispatch({
          type: GET_TECH_ITEMS_SUCCESS,
          payload: { error: "", isFetching: false, techList: res.data },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_TECH_ITEMS_FAIL,
          payload: {
            error: "SOMETHING WENT HORRIBLY WORNG",
            isFetching: false,
          },
        });
      });
  };
};

export const getCurrentTechItems = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_TECH_CURRENT_ITEM_START,
      payload: { error: "", isFetching: true },
    });
    axiosWithAuth()
      .get(`api/tech/${id}`)
      .then((res) => {
        dispatch({
          type: GET_TECH_CURRENT_ITEM_SUCCESS,
          payload: {
            error: "",
            isFetching: false,
            currentTechItem: res.data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_TECH_CURRENT_ITEM_FAIL,
          payload: { error: "TRY COMING FROM RENTERPAGE", isFetching: false },
        });
      });
  };
};
