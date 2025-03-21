"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';
import getBanners from '@/service/getBanners';
import { BannerType } from '@/types/BannerType';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button';

const Hero = () => {
  const { data: banners } = getBanners();
    const t = useTranslations("HeroContent")
  return (
    <div className="h-[450px] mt-5 bg-[#F3F0F0]">
      <div className="containers">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
          {banners.map((item: BannerType) => (
            <SwiperSlide className='p-5 ' key={item.id}>
            <div className="w-[596px] text-start">
              <h2 className="font-black text-[44px] text-[#0A1729] mb-[6px]">{item.name}</h2>
              <p className="text-[16px] text-[#545D6A] mb-[22px]">{item.description}</p>
              <Button>{t("more")}</Button>
            </div>
            <Image
              className="w-[455px]"
              src={`${IMG_API}/${item.image}`}
              alt="Banner img"
              width={755}
              height={731}
              priority
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
