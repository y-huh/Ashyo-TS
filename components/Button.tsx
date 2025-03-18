import { ButtonType } from '@/types/ButtonType';
import React, { FC } from 'react';

const Button:FC<ButtonType> = ({ extraClass, children, icon, iconPosition, onClick,bage }) => {
  return (
    <button
      onClick={onClick}
      className={`flex py-[14px] px-[25px] bg-[#134E9B] text-[16px] rounded-[6px] font-semibold text-white items-center justify-center gap-[20px] ${extraClass}`}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
      {bage && <span className='absolute top-[-25%] right-[-20%] w-[20px] h-[20px] bg-[#FB1504] text-white  rounded-full flex items-center font-bold text-[10px] justify-center'>{bage}</span>}

    </button>
  );
};

export default Button;