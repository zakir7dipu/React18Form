import axios from "axios";
import global from "./config"
const {base_path} = global

class Api {
    apiAccess = axios.create({
        baseURL: `${base_path}api`,
        headers: {
            "Content-type": "application/json",
            "x-api-key": "beb894742971fc790c59ac0f14502ae87c2ad09e"
        }
    })
}

export default Api;