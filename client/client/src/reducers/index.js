import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productsReducer from './productsReducer'
import profileReducer from './profileReducer'

export default combineReducers({
auth:authReducer,
products:productsReducer,
profile: profileReducer
})