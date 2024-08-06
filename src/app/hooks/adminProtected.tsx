import { useSelector } from "react-redux";

import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";
import { RootState } from "../../../redux/store";
interface RootNode{
    children:ReactNode
}
export const AdminProtected:FC<RootNode> = ({ children }) => {
    const { user } = useSelector((state:RootState) => state.auth);
    
    if (user) {
        const isAdmin = user?.role === 'admin';
        return isAdmin ? children : redirect("/")

    }
}