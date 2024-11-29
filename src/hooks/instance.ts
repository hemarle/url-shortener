import axios from "axios";
import Cookies from "js-cookie" 

const instance= axios.create({
    baseURL:"https://9jkd.co/"
})
instance.interceptors.request.use(config => {
    let accessToken = Cookies.get("access")

    if (!!accessToken) {
        config.headers["Authorization"]= `Bearer ${accessToken}`
    }
    return config
})
export default instance