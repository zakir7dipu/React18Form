import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../features/userInfo/UserInfoSlice"

const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
    } 
})

export default store;