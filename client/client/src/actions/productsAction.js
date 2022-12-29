import axios from 'axios'
import {GET_PRODUCTS, PRODUCT_ERROR,GET_PRODUCT} from './types'
import {getServer} from '../util'

export const getProducts=()=> async dispatch=>{
    try {
        const res=await axios.get(`${getServer()}/api/products`)
        console.log(res)
        dispatch({
            type:GET_PRODUCTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:PRODUCT_ERROR,
            payload:{status:err.response.status}
        })
        
    }
}

export const addProduct=(productData,history)=> async dispatch=>{
    const config ={
        headers:{
            "Content-Type":"application/json"
        }
       }
    try {
        const res=await axios.post(`${getServer()}/api/products`, productData,config)
        if (res) history.push('/dashboard/products')
       
    } catch (err) {
        dispatch({
            type:PRODUCT_ERROR,
            payload:{status:err.response.status}
        })
        
    }
}

export const getInstructorProducts = (id) => async (dispatch) => {
    try {
      await axios
        .get(`${getServer()}/api/products/instructors/${id}`)
        .then((res) =>
          dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
          })
        );
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { status: err.response },
      });
    }
  };

  export const getProduct = (id) => async (dispatch) => {
    try {
        await axios
        .get(`${getServer()}/api/products/${id}`)
        .then((res) =>
         dispatch ({
            type: GET_PRODUCT,
            payload:res.data,
          })
        );
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload:{status: err.response},
        });
    }
}
  