import { IGeneral } from "./types";


export const loginLoadingSelector = (state:IGeneral) => {
    return state.loading
}

export const loginErrorSelector = (state:IGeneral) => {
    return state.error
}