import { axiosInstance } from "../../Config/api"


export const fetchFlightApi:any = () => {
    const token = localStorage.getItem('token')
    return axiosInstance.get('flights',{headers:{authorization:`bearer ${token}`}})
    .then(res => res)
    .catch(error=> error)
}



export const bookFlightApi:any = (params:any) => {
    console.log(params)
    const token = localStorage.getItem('token')
    return axiosInstance.post('book',params,{headers:{authorization:`bearer ${token}`}})
    .then(res => res)
    .catch(error=> error)
}