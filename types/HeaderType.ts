import { ReactNode } from "react";

export interface HeaderTopNavListType {
  id: number;
  icon: ReactNode | null;
  title: string | null;
  path: string;
}

export interface HeaderActionsType {
  id: number;
  icon: ReactNode;
  bage: number;
  className: string;
}

export interface CategoryType {
  createdAt: string;
  icon: string;
  id: number;
  image: string;
  name:string;
  parentCategoryId: null | number;
  subCategories: CategoryType[];
  updatedAt:string;
}
export interface FooterLinks {
  id:number,
  path:string,
  icon:ReactNode | null
}