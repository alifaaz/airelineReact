import axios from 'axios'
import { BASE_URI } from './Constants'


export const axiosInstance = axios.create({
    baseURL:BASE_URI
})