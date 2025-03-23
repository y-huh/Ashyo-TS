"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import getBanners from '@/service/getBanners';
import { BannerType } from '@/types/BannerType';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';

const Hero = () => {
    const { data: banners } = getBanners()
    const t = useTranslations("HeroContent")
    return (
        <div className='py-[20px] bg-[#F3F0F0]'>
            <div className='containers'>
                <Swiper loop={true}  pagination={true} modules={[Autoplay,Pagination]} className="mySwiper !pt-[37px] sm:!py-[50px]">
                    {banners.map((item: BannerType) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-[596px] text-center sm:text-start'>
                                <h2 className='font-black text-[22px] sm:text-[44px] text-[#0A1729] mb-[6px]'>{item.name}</h2>
                                <p className='text-[12px] sm:text-[16px] text-[#545D6A] mb-[22px]'>{item.description}</p>
                                <Button extraClass='mx-auto sm:mx-0 w-[30%]'>{t("more")}</Button>
                            </div>
                            <Image className='hidden lg:block max-w-[455px] h-[350px] object-contain absolute lg:static bottom-0 right-0' src={`${IMG_API}/${item.image}`} alt='Banner img' width={555} height={731} priority />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero