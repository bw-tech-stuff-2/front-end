import {
  GET_REQUEST_ITEMS_START,
  GET_REQUEST_ITEMS_SUCCESS,
  GET_REQUEST_ITEMS_FAIL,
  GET_REQUEST_CURRENT_ITEM_START,
  GET_REQUEST_CURRENT_ITEM_SUCCESS,
  GET_REQUEST_CURRENT_ITEM_FAIL,
} from "../actions/";

const initalState = {
  isFetching: false,
  error: "",
  requestList: [],
  currentRequestItem: {},
};

export const getRequestItems = (state = initalState, action) => {
  switch (action.type) {
    case GET_REQUEST_ITEMS_START:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case GET_REQUEST_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
        requestList: action.payload.requestList,
      };

    case GET_REQUEST_ITEMS_FAIL:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case GET_REQUEST_CURRENT_ITEM_START:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case GET_REQUEST_CURRENT_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
        currentRequestItem: action.payload.currentRequestItem,
      };
    case GET_REQUEST_CURRENT_ITEM_FAIL:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
