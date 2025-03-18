import { ReactNode } from "react";

export interface HeaderTopNavListType {
    id:number,
    icon:ReactNode | null,
    title:string | null,
    path:string
}