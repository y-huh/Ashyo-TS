"use client"
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import getProducts from '@/service/getProducts';
import { ProductType } from '@/types/ProductType';
import ProductCard from './ProductCard';

const RecentlyProducts:FC<{title:string}> = ({title}) => {
    const t = useTranslations("Products")
    const {data:products} = getProducts()
    
    return (
        <div className={`products`}>
            <div className="containers">
                <h2 className='font-bold text-[16px] sm:text-[32px] text-[#000000]'>{title}</h2>
            </div>
            <Swiper
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper mt-[20px] sm:mt-[50px]"
            >
                {products.map((item:ProductType) => <SwiperSlide key={item.id}> <ProductCard item={item}/> </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default RecentlyProducts