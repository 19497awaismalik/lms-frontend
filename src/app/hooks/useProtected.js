"use client"
import { UserAuth } from "./userAuth";

import { redirect } from "next/navigation";

export const Protected=({children})=>{
    const isAuthenticated=UserAuth();
    return isAuthenticated ? children : redirect("/")
}