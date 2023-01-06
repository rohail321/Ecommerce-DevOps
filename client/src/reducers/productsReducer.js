import {PRODUCT_ERROR,GET_PRODUCTS,GET_PRODUCT} from '../actions/types'
const  initialState={
    products:[],
    product:{},
    errors:{}
}

export default function(state=initialState,actions) {
    const {type, payload}=actions

    switch (type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products:payload
            }
        case GET_PRODUCT:
            return{
                ...state,
                product:payload
            }
        case PRODUCT_ERROR:
            return{
                ...state,
                errors:payload
            }
        default:
            return {...state}
    }
}