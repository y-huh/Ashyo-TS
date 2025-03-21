import React from "react";
import { Skeleton } from "antd";

const HeaderCategorySkeleton = () => {
  return (
    <div className="flex justify-between w-full">
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
      <Skeleton active className="w-[100px]" paragraph={{ rows: 0 }} />
    </div>
  );
};

export default HeaderCategorySkeleton;
