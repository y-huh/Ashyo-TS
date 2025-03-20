import { FocusEventHandler, MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    extraClass?:string,
    children:ReactNode,
    icon?:ReactNode,
    iconPosition?:"left" | "right",
    onClick?:MouseEventHandler<HTMLButtonElement>,
    bage?:number,
    onBlur?:FocusEventHandler<HTMLButtonElement>
}