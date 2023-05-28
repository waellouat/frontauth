import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:'authuser',
    initialState:[{
        id:1,
        name:"wael",
        email:"wael@gmail.com",
        password: "1234567",
        role:"admin"
    }
],
reducers:{
    setauth:(state,action)=>{
        return action.payload
    }
}
})

export const {setauth}=authSlice.actions
export default authSlice.reducer