import axios from "axios";

const api = axios.create({
    baseURL: '/api/clients'
})
    
export default api