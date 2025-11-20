import axios from 'axios'
import {POKEMON_API_URL} from './constants'

const axiosInstance = axios.create({
    baseURL: POKEMON_API_URL,
})

export default axiosInstance

