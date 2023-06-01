import axios from "axios";
import global from "./config"
const {base_path} = global
axios.defaults.headers['X-API-KEY'] = 'beb894742971fc790c59ac0f14502ae87c2ad09e';

class Api {
    
    apiAccess = axios.create({
        baseURL: `${base_path}api`,
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export default Api;