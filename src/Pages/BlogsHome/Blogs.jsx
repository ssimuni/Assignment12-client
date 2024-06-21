import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import useArticles from '../../Hooks/useArticles';
import { FaNewspaper } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { TbPremiumRights } from 'react-icons/tb';
import { MdDashboard } from 'react-icons/md';


const Blogs = () => {

    return (
        <div>
            <SectionTitle heading={"Our Features"}></SectionTitle>
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                        <div class="relative flex flex-col min-w-0 break-words bg-[#E3963E] w-full mb-6 shadow-lg rounded-lg ">
                            <img alt="..." src="/feature.jpg" class="w-full h-96 align-middle rounded-t-lg" />
                            <blockquote class="relative p-8 mb-4">

                                <h4 class="text-xl font-bold text-white">
                                    Welcome to the Read&Digest, where staying informed meets unparalleled convenience and engagement.
                                </h4>
                                <p class="text-md font-light mt-2 text-white">
                                    For those seeking deeper insights and exclusive content, our Subscription service unlocks premium articles curated for our subscribers. Enjoy a seamless browsing experience across all devices, from desktops to tablets and mobile phones, ensuring you never miss a beat.
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 px-4 ">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-6/12 px-4">
                                <div class="relative flex flex-col mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-[#E3963E] text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <FaNewspaper></FaNewspaper>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold text-[#E3963E]">Comprehensive News Aggregation</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Our website focuses on providing a comprehensive news aggregation platform that delivers trending articles, offers premium features, and ensures a seamless user experience.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-[#E3963E] text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <BiSearch></BiSearch>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold text-[#E3963E]">
                                            Advanced Article Filtering and Search
                                        </h6>
                                        <p class="mb-4 text-blueGray-500">
                                            The All Articles page will allow users to filter articles by publisher and tags, and include a search bar to find articles by title. This advanced filtering and search functionality will be powered by a robust backend system to ensure fast and accurate results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-6/12 px-4">
                                <div class="relative flex flex-col min-w-0 mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 text-[#E3963E] p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <TbPremiumRights></TbPremiumRights>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold text-[#E3963E]">Subscription-Based Premium Content</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Users can subscribe to a premium plan to access exclusive articles and content. The subscription options will be flexible, with different periods and pricing. Premium articles will have a distinct design to differentiate them from free content, and access to these articles will be restricted to subscribers only.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 text-[#E3963E] p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <MdDashboard></MdDashboard>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold text-[#E3963E]">Personalized User Dashboard</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Each user will have a personalized dashboard where they can view and manage their own articles, update their profile information, and track their subscription status. For premium users, the dashboard will also display premium content and special features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
