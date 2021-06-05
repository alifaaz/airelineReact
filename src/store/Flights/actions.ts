import { BOOK_FLIGHT, BOOK_FLIGHT_FAIL, BOOK_FLIGHT_START, BOOK_FLIGHT_SUCCESS, BOOK_RESET, FETCH_FLIGHT, FETCH_FLIGHT_FAIL, FETCH_FLIGHT_START, FETCH_FLIGHT_SUCCESS } from "../global/actionTypes"

export const fetchFlightAction = () => {
    return {
        type:FETCH_FLIGHT,
    }
} 

export const fetchFlightStartAction = () => {
    return {
        type:FETCH_FLIGHT_START,
    }
}



export const fetchFlightSuccessAction = (payload:any) => {
    return {
        type:FETCH_FLIGHT_SUCCESS,
        payload
    }
} 


export const fetchFlightFailAction = (error:string) => {
    return {
        type:FETCH_FLIGHT_FAIL,
        error
    }

} 


// book flights actions
export const bookFlightAction = (params:any) => {
    return {
        type:BOOK_FLIGHT,
        params
    }
} 

export const bookFlightStartAction = () => {
    return {
        type:BOOK_FLIGHT_START,
    }
}



export const bookFlightSuccessAction = () => {
    return {
        type:BOOK_FLIGHT_SUCCESS
    }
} 


export const bookFlightFailAction = (error:string) => {
    return {
        type:BOOK_FLIGHT_FAIL,
        error
    }
} 



export const bookFlightResetAction = () => {
    return {
        type:BOOK_RESET    }
} 

