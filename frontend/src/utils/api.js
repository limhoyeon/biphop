import Axios from "axios"


const api=Axios.create({
    baseURL:"http://15.164.230.216"
    // baseURL:"http://127.0.0.1:8081"
})
export default api