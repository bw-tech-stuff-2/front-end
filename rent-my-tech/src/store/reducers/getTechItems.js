import {
  GET_TECH_ITEMS_START,
  GET_TECH_ITEMS_SUCCESS,
  GET_TECH_ITEMS_FAIL,
  GET_TECH_CURRENT_ITEM_START,
  GET_TECH_CURRENT_ITEM_SUCCESS,
  GET_TECH_CURRENT_ITEM_FAIL,
  POST_TECH_ITEM_START,
  POST_TECH_ITEM_SUCCESS,
  POST_TECH_ITEM_FAIL,
} from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  techList: [],
  currentTechItem: {},
};

export const getTechItems = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECH_ITEMS_START:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case GET_TECH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
        techList: action.payload.techList,
      };

    case GET_TECH_ITEMS_FAIL:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };

    case GET_TECH_CURRENT_ITEM_START:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };

    case GET_TECH_CURRENT_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
        currentTechItem: action.payload.currentTechItem,
      };

    case GET_TECH_CURRENT_ITEM_FAIL:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };

    case POST_TECH_ITEM_START:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case POST_TECH_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case POST_TECH_ITEM_FAIL:
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
