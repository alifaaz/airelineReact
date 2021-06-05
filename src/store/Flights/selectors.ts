import { IFlights } from "./types"

export const fetchFlightLoadingSelector = (state:IFlights) => {
    return state.loading
}
export const fetchFlightErrorSelector = (state:IFlights) => {
    return state.error
}


export const fetchFlightDataSelector = (state:IFlights) => {
    if(!state || !state.data) return null
    return state.data
}


export const bookFlightLoadingSelector = (state:IFlights) => {
    return state.book.loading
}
export const bookFlightErrorSelector = (state:IFlights) => {
    return state.book.error
}


export const bookFlightDataSelector = (state:IFlights) => {
    return state.book.success
}
