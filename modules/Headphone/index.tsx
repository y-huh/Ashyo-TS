import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const HeadphoneSection = () => {
  const t = useTranslations("Headphone")
  return (
    <div className='containers rounded-[10px] hidden lg:flex !mt-[100px] gap-[67px] h-[420px] !mb-[172px] justify-center bg-[#282828] '>
        <Image className='w-[518px] !h-[493px] ' src={"/headphone.png"} priority alt='Headphone Pic' width={518} height={493}/>
        <div className='flex flex-col gap-[21px] justify-center w-[438px]'>
          <h2 className='text-white font-bold text-[32px]  leading-[38px]'>{t("title")}</h2>
          <Button extraClass='!w-[161px] !bg-white !text-[16px] !leading-[120%] !text-black'>{t("more")}</Button>
        </div>
    </div>
  )
}

export default HeadphoneSection