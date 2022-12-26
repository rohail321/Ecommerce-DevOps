import {PRODUCT_ERROR,GET_PRODUCTS} from '../actions/types'
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
        case PRODUCT_ERROR:
            return{
                ...state,
                errors:payload
            }
        default:
            return {...state}
    }
}