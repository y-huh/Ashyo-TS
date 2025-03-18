import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
  extraClass?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  bage?:number
}
