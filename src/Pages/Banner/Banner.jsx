import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link, useLoaderData } from 'react-router-dom';
import { EffectCoverflow } from 'swiper/modules';
import '../../App.css'
import useArticles from '../../Hooks/useArticles';

const Banner = () => {
    const [topArticles] = useArticles('?sortBy=viewCount&limit=6');


    return (
        <div>
            <div class="max-w-screen-xl lg:flex items-center justify-center mt-10">

                <div class=" z-20 flex items-center overflow-hidden  dark:bg-gray-800">
                    <div class="container  flex px-6 py-16 mx-auto">
                        <div class=" z-20 flex flex-col">

                            <h1 class="left flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                                Trending
                                <span class="text-5xl sm:text-7xl text-[#E3963E]">
                                    Articles
                                </span>
                            </h1>
                            <p class="text-sm text-gray-700 sm:text-base dark:text-white">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div class="flex mt-8">
                                <a href="#" class="px-4 py-2 mr-4 text-white uppercase bg-[#E3963E] border-2 border-transparent rounded-lg text-md hover:bg-orange-400">
                                    Get started
                                </a>

                            </div>
                        </div>

                    </div>
                </div>




                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    slideToClickedSlide={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}

                >

                    {topArticles.slice(0, 6).map((article) => (
                        <SwiperSlide key={article._id}>
                            <div className="relative">
                                <img src={article.image} alt={article.title} className="h-[300px] w-full object-cover" />
                                <div className="absolute inset-0 italic flex items-center justify-center bg-black bg-opacity-50">
                                    <h1 className="text-center px-2 mb-10 font-bold text-white text-2xl">{article.title}</h1>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div>
    )
}

export default Banner