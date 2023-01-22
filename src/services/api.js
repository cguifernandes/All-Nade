import axios from "axios";

const api = axios.create({
    baseURL: 'https://all-nade.vercel.app/api'
})
    
export default api