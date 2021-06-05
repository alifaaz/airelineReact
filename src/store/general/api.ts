import { axiosInstance } from "../../Config/api"


export const loginApi:any = (params:any) => {
    return axiosInstance.post('login',params)
    .then(res => res)
    .catch(error=> error)
}



export const authCheckApi:any = () => {
    const token = localStorage.getItem('token')
    return axiosInstance.get('authCheck',{headers:{authorization:`bearer ${token}`}})
    .then(res => res)
    .catch(error=> error)
}