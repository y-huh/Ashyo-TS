import React, { FC } from "react";

const Features: FC<{ singleProduct: any }> = ({ singleProduct }) => {
  console.log(singleProduct);

  return (
    <table className=" w-full md:w-[651px] border-collapse">
      <tbody>
        {singleProduct.configurations?.map((item: any) => (
          <tr key={item.id} className="border-b border-dashed border-[#545D6A]">
            <td className="py-2 px-4 font-medium text-[#545D6A]">
              {item?.variationOption?.variation?.name}
            </td>
            <td className="py-2 px-4 text-[#545D6A]">
              {item?.variationOption?.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Features;
