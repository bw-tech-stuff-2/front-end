import {SET_TOKEN} from '../actions/'

const initalState = {}

export const setToken = (state=initalState, action) => {
    switch(action.type) {
        case SET_TOKEN:
            localStorage.setItem("token", action.payload)
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}