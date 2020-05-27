import {combineReducers} from 'redux'
import {setToken} from './setToken'
import {getRequestItems} from './getRequestItems'

export default combineReducers({
    setToken,
    getRequestItems
    // reducer3,
    // etc...
})
