import React from 'react'
import SectionTitle from '../../Components/SectionTitle'

const Pricing = () => {
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
                                <span class="text-base font-normal text-gray-400">/ Month</span></h4>
                            <p class="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300">All limited links</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300">Own analytics platform</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300">Chat support</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300">Unlimited users</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#E3963E] rounded-md hover:bg-orange-500 focus:outline-none focus:bg-blue-600">Choose plan</button>
                        </div>

                        <div
                            class="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg lg:w-96 mx-auto">
                            <p class="text-lg font-medium text-white dark:text-gray-100">Premium</p>
                            <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-100">$99
                                <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                            <p class="mt-4 text-white dark:text-gray-300">For most businesses that want to optimaize web
                                queries.</p>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300">All limited links</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300">Own analytics platform</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300">Chat support</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#E3963E]"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300">Unlimited users</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#E3963E] rounded-md hover:bg-orange-500 focus:outline-none focus:bg-blue-600">Choose plan</button>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Pricing