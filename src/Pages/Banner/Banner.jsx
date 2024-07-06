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
            <div class="lg:flex h-full items-center justify-center mt-10 bg-cover bg-fixed w-full bg-black px-5 @lg:px-12 lg:px-20 py-10"
                style={{
                    backgroundImage: 'url(statb.jpg)',
                }}>

                <div class="flex items-center overflow-hidden  dark:bg-gray-800">
                    <div class="container  flex px-6 py-16 mx-auto">
                        <div class="flex flex-col">

                            <h1 class="left flex flex-col text-6xl font-black leading-none text-white uppercase font-bebas-neue sm:text-8xl dark:text-white">
                                Trending
                                <span class="text-5xl sm:text-7xl text-[#E3963E]">
                                    Articles
                                </span>
                            </h1>
                            <p class="text-sm text-white sm:text-base dark:text-white">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div className="w-full mt-10 flex items-center text-white justify-start gap-2">
                                <Link to='allArticles' className="h-10 px-5 text-center font-bold justify-center flex items-center rounded-lg bg-[#E3963E] text-white" fdprocessedid="q4hkxk">See All Articles
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-5 lucide lucide-move-right">
                                        <path d="M18 8L22 12L18 16">
                                        </path>
                                        <path d="M2 12H22">
                                        </path>
                                    </svg></Link>
                               
                            </div>

                            <ul className="mt-10 flex items-center justify-start gap-5 lg:gap-12 h-28 z-10">
                                <li className="flex flex-col items-center hover:p-7  hover:shadow-2xl font-bold p-5 shadow-lg rounded-lg bg-[#E3963E] bg-opacity-70">
                                    <p className="text-3xl lg:text-5xl text-white">1K<span className="text-white">+</span>
                                    </p>
                                    <p className='text-white'>Articles</p>
                                </li>
                                <li className="flex flex-col items-center hover:p-7 hover:shadow-2xl font-bold p-5 shadow-lg rounded-lg bg-[#E3963E] bg-opacity-70">
                                    <p className="text-3xl lg:text-5xl text-white">10K<span className="text-white">+</span>
                                    </p>
                                    <p className='text-white'>Users</p>
                                </li>
                                <li className="flex bg-[#E3963E]  hover:shadow-2xl hover:p-7 bg-opacity-70 flex-col items-center font-bold p-5 shadow-lg rounded-lg">
                                    <p className="text-3xl lg:text-5xl text-white">3K<span className="text-white">+</span>
                                    </p>
                                    <p className='text-white'>Reviews</p>
                                </li>
                            </ul>
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
                            <div className="border-glow relative rounded-3xl">
                                <img src={article.image} alt={article.title} className="h-[300px] w-full object-cover" />
                                <div className="absolute inset-0 italic flex items-center justify-center rounded-3xl bg-black bg-opacity-40">
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