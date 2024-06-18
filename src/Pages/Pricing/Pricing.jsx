import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AiFillRightCircle } from "react-icons/ai";

const Pricing = () => {

    const freebtn = e => {
        Swal.fire({
            title: 'Success!',
            text: 'You can use Read&Digest free for 1 month!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div>

            <SectionTitle heading={"Subscription Plans"} subHeading={"Choose the Best Plan for You"}></SectionTitle>
            <section style={{
                backgroundImage: 'url(p1.jpg)'
            }}
                class=" h-full bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 px-2">
                <div class="container px-6 py-8 mx-auto">
                    <div class="grid gap-6 mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto">

                        <div
                            class="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg lg:w-96 mx-auto">
                            <p class="text-lg font-medium text-gray-100">Free</p>
                            <h4 class="mt-2 text-4xl font-semibold text-gray-100">$00
                                <span class="text-base font-normal text-white">/ Month</span></h4>
                            <p class="mt-4 text-white">For most businesses that want to optimaize web queries.</p>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                    <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Access to Basic Articles</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Breaking News Alerts</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Basic Search Functionality</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Personalized Content Recommendations</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Image Galleries and Videos</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Category Browsing</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white">Article Sharing</span>
                                </div>

                               
                            </div>

                            <button onClick={freebtn} class="btn w-full border-none mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#E3963E] rounded-md hover:bg-orange-500 focus:outline-none text-[18px]">Try free for one month</button>
                        </div>



                        <div
                            class="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg lg:w-96 mx-auto">
                            <p class="text-lg font-medium text-white dark:text-gray-100">Premium</p>
                            <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-100">Less than $30
                                <span class="text-base font-normal text-white dark:text-white">/ Month</span></h4>
                            <p class="mt-4 text-white dark:text-white">For most businesses that want to optimaize web
                                queries.</p>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Unlimited Article Access</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Ad-Free Experience</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Offline Reading</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Early Access to Articles</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Premium Newsletters</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Interactive Features</span>
                                </div>

                                <div class="flex items-center">
                                     <AiFillRightCircle className='text-[#E3963E] w-6 h-6' />

                                    <span class="mx-4 text-white dark:text-white">Podcasts and Audio Articles</span>
                                </div>
                            </div>

                            <Link to="/subscription" class="btn w-full border-none mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#E3963E] rounded-md hover:bg-orange-500 focus:outline-none text-[18px]">Choose plan</Link>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Pricing