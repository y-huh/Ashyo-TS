"use client";

import HeaderCategorySkeleton from "@/components/HeaderCategorySkeleton";
import { Link } from "@/i18n/navigation";
import getCategory from "@/service/getCategory";
import { CategoryType } from "@/types/HeaderType";
import React from "react";

const HeaderCategory = () => {
  const { data: categoryList, isLoading } = getCategory();

  return (
    <div className="containers flex items-center justify-between">
      {isLoading ? (
        <HeaderCategorySkeleton />
      ) : (
        categoryList.map((item: CategoryType) => (
          <Link
            className="text-[#545D6A] text-[16px]"
            key={item.id}
            href={"#"}
          >
            {item.name}
          </Link>
        ))
      )}
    </div>
  );
};

export default HeaderCategory;
