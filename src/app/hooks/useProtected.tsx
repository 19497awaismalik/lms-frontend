"use client"
import React, { FC, ReactNode } from "react";
import { UserAuth } from "./useAuth";

import { redirect } from "next/navigation";
interface RootNode{
    children:ReactNode
}
export const Protected:FC<RootNode> = ({ children }) => {
    const isAuthenticated = UserAuth();
    return isAuthenticated ? children : redirect("/")
}