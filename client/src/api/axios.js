import axios from 'axios'

//cuale es el domio axios

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true // le establesca la cookies
})

export default instance
