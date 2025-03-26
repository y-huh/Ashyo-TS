"use client"
import { CompareIcon, LikeIcon, MarketIcon, ShipIcon, TimeIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { IMG_API } from '@/hooks/getEnv'
import RecentlyProducts from '@/modules/Products/RecentlyProducts'
import Features from '@/modules/Products/SingleProduct/Features'
import getSingleProduct from '@/service/getSingleProduct'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const [variationActive, setVariationActive] = useState("features");
  
  const { id } = useParams()
  const { data: singleData } = getSingleProduct(id)
  const t = useTranslations("SingleProducts")
  console.log(singleData);

  return (
    <>
    <div className='containers'>
      <h2 className='font-bold text-[32px] leading-[130%] mb-[36px]'>
        {singleData?.product?.name}</h2>
      <div className='flex flex-col md:flex-row justify-between mb-[80px]'>
        <div className='w-full md:w-[50%] h-[430px] relative bg-[#EBEFF3] rounded-[10px] flex items-center justify-center'>
          <Image
            className='w-[341px] h-[341px]'
            src={`${IMG_API}/${singleData.image}`}
            alt='Product img'
            priority
            width={341}
            height={341}
          />
          <div className='flex items-center gap-[20px] absolute top-[26px] right-[31px]'>
            <button className='text-[#5F728B]'>
              <CompareIcon />
            </button>
            <button className='text-[#5F728B]'>
              <LikeIcon />
            </button>
          </div>

        </div>
        <div className="w-full md:w-[49%] ">
              <div className='flex items-center  gap-[20px]'>
              <span className="font-normal text-[#515D6C] text-[16px]">{t("price")}</span>

                <p className="font-bold text-[32px] text-[#06172D]">
                  {singleData.price} UZS
                </p>
              </div>
              
              <p className="py-[19px] mt-[36px] bg-[#EBEFF3] rounded-[6px] text-center text-[#545D6A] text-[16px]">{t("debt")}</p>
<div className="flex gap-[14px] mt-[10px] mb-[43px]">
  <Button extraClass="!w-[50%] !bg-transparent !border-[1px] !border-[#134E9B] !text-[#134E9B]">
    {t("saveContent")}
  </Button>
  <Button extraClass="!w-[50%]">
    {t("buy")}
  </Button>
  
</div>
<ul className='flex flex-col gap-[20px]'>
  <li className='flex items-center gap-[17px]'>
    <ShipIcon/>
    <p className='text-[16px] text-[#06172DB2]'>{t("ship")}</p>
  </li>
  <li className='flex items-center gap-[17px]'>
    <MarketIcon/>
    <p className='text-[16px] text-[#06172DB2]'>{t("markat")}</p>
  </li>
  <li className='flex items-center gap-[17px]'>
    <TimeIcon/>
    <p className='text-[16px] text-[#06172DB2]'>{t("watch")}</p>
  </li>
</ul>


        </div>
      </div>
      <div className="flex items-center gap-[87px] mb-[41px]">
        <strong onClick={() => setVariationActive("features")} className={`${variationActive === "features" ? "text-[#06172D] border-[#06172D]" : "text-[#B6BABF] border-transparent"} cursor-pointer border-b-[1px] text-[18px] font-normal`}>Telefon xususiyatlari</strong>
        <strong onClick={() => setVariationActive("opinions")} className={`${variationActive === "opinions" ? "text-[#06172D] border-[#06172D]" : "text-[#B6BABF] border-transparent"} cursor-pointer border-b-[1px] text-[18px] font-normal`}>Mijozlarning fikrlari</strong>
      </div>
      <div className='mb-[100px]'>
        {variationActive == "features" ? <Features singleProduct={singleData}/> : "Coming soon ..."}
      </div>

    </div>
      <RecentlyProducts title={t("recently")}/>
    
    </>
    
  )
}

export default page