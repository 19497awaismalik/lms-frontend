"use client"
import { useSelector } from "react-redux";
export const UserAuth=()=>{

    const {user}=useSelector((state)=>state.auth);
    
    if(user){
        return true;
    }
    else{
        return false;
    }

}