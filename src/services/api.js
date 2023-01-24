import axios from "axios";

const api = axios.create({
    baseURL: 'https://all-nade-rnba.vercel.app/api'
})
    
export default api