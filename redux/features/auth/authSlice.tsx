import  { createSlice,PayloadAction } from "@reduxjs/toolkit";

 interface User {
    id: string;
    role:string,
    name: string;
    avatar?: {
        url: string;
    };
}
 interface AuthState {
    token: string;
    user: User | null;
}
 interface UserRegistrationPayload {
    token: string;
}

 interface UserLoggedInPayload {
    token: string;
    user: User;
}

const initialState:AuthState={
    token:"",
    user:null
}
export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
    userRegistration:(state,action:PayloadAction<UserRegistrationPayload>)=>{
        state.token=action.payload.token


    },
    userLoggedIn:(state,action:PayloadAction<UserLoggedInPayload>)=>{
        state.token=action.payload.token,
        state.user=action.payload.user
    },
    
    userLogOut:(state)=>{
        state.token="",
        state.user=null

    }
    }
})


export const {userRegistration,userLogOut,userLoggedIn}=authSlice.actions

