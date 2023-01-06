import {SET_CURRENT_USER,SUCCESSFULL_REGISTER,FAILURE_REGISTER,ERRORS, AUTH_ERROR, SUCCESSFULL_LOGIN,FAILURE_LOGIN, LOGOUT} from '../actions/types'

const initialState={
    isAuthenticated:localStorage.getItem("token")?true:false,
    token:localStorage.getItem("token"),
    user:{},
    errors:[]
}

export default function(state=initialState, action){
    const {payload}=action
    switch (action.type) {
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated:true,
                user:payload
            }
        case SUCCESSFULL_REGISTER:
        case SUCCESSFULL_LOGIN:
            localStorage.setItem("token",payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true
            }
        case ERRORS:
            return{
                ...state,
                errors:payload
            }

        case AUTH_ERROR:
        case FAILURE_REGISTER:
        case FAILURE_LOGIN:
        case LOGOUT:
            localStorage.removeItem("token")
            return{
                ...state,
                token:null,
                isAuthenticated:false
            }
    
        default:
            return state
    }
}