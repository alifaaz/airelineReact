import { CHECK_AUTH, LOGIN, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../global/actionTypes"


export const checkAuthAction = () => {
    return {
        
        type:CHECK_AUTH
    
    }
}


export const loginAction = (params:any) => {
    return {
        type:LOGIN,
        params
    }
}


export const loginStartAction = () => {
    return {
        type:LOGIN_START,
        
    }
}


export const loginSuccessAction = (payload:any) => {
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}

export const loginFailAction = (error:string) => {
    return {
        type:LOGIN_FAIL,
        error
    }
}