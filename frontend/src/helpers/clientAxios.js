import axios from 'axios'

const clientAxios = axios.create({
    baseURL: `${process.env.BACKEND_API_URL}/api`
})

export default clientAxios