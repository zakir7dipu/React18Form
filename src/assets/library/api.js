import axios from "axios";
import global from "./config"
const {base_path} = global
const token = "beb894742971fc790c59ac0f14502ae87c2ad09e"
axios.defaults.headers['X-API-KEY'] = token;

class Api {
    
    apiAccess = axios.create({
        baseURL: `${base_path}api`,
        headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        }
    })
}

export default Api;