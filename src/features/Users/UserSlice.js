import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchedAsyncUser = createAsyncThunk('/users/fetchedAsyncUser', async () => {
    const response = await axios.get("https://randomuser.me/api/?results=10")
    console.log(response)
    return response.data;
});
const initialState = {
    users: [],
    user: {},
    userDetails: {},
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loginUser: (state, action)=>{
            state.user = action.payload;
        },
        logOutUser:  (state)=>{
            state.user = {};
        },
    },
    extraReducers:{
        [fetchedAsyncUser.pending]: ()=>{
            console.log("user is loading");
        },
        [fetchedAsyncUser.fulfilled]: (state, {payload})=>{
            console.log("fetched successfully");
            console.log(payload)
            return {...state, users:payload};
        },
        [fetchedAsyncUser.rejected]: () =>{
            console.log("rejected");
        },
    }
});

export const { loginUser,logOutUser } = userSlice.actions;
export const getAllUsers = state => state.users.users;
export default userSlice.reducer;