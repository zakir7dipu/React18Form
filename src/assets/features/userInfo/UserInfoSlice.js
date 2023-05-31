
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../library/api"

const {apiAccess} = new Api()

const initialData = {
   isUserInfoLoading: true,
   userInfos: [],
   errorMsg: null
}

export const storeUserInfo = createAsyncThunk("userInfo/storeUserInfo", async(date, {rejectWithValue})=>{
   try {
      const res = apiAccess.post("stores/add/", date);
      return res.data
   } catch (err) {
      return rejectWithValue(err.response)
   }
})

export const userInfoSlice = createSlice({
   name: "userInfo",
   initialState: initialData,
   reducers: {
      showAllData: (state) => state,
      showData: (state, data) => state.userInfos.filter(info.id === data),
   },
   extraReducers: {
      [storeUserInfo.pending]: (state) => {
         state.isUserInfoLoading = true
      },
      [storeUserInfo.fulfilled]: (state, {payload}) => {
         state.isUserInfoLoading = false;
         state.userInfos = [...state.userInfos, payload]
      },
      [storeUserInfo.rejected]: (state, {payload}) => {
         state.isUserInfoLoading = false;
         state.errorMsg = payload.data.message;
      }
   }
})

export const {showAllData, showData} = userInfoSlice.actions;
export default userInfoSlice.reducer;