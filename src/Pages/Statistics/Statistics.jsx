import React from 'react'
import SectionTitle from '../../Components/SectionTitle'

const Statistics = () => {
    return (
        <div>
            <SectionTitle heading={"Our Users"} subHeading={"Insights into Our User Base"}></SectionTitle>

           
            <div class="h-full">
                <div class="container mx-auto  lg:px-20" >
                    <div class='grid grid-cols-3 h-full pb-40'>
                        <div class="border-r border-gray-300 mx-3 lg:pl-20">
                            <div class=" py-10 pb-3 mt-72 h-4/6 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                                <div>
                                    <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50"></div>
                                    <img src="https://i.ibb.co/FzkhpcD/pngegg.png" alt="https://www.pngegg.com/en/png-nllal/download"/>
                                </div>
                                <div class="px-7 mt-20">
                                    <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">01.</h1>
                                    <h2 class="text-1xl mt-4 font-bold">Roof light lamp</h2>
                                    <p class="mt-2 opacity-60 group-hover:opacity-70 ">Diverse collection of roof lights of quality</p>
                                </div>
                            </div>
                        </div>
                        <div class="border-r border-gray-300 mx-3 lg:pl-20">
                            <div class=" py-10  pb-3 mt-32 h-4/6 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
                                <div>
                                    <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50"></div>
                                    <img src="https://i.ibb.co/JB4GWMJ/pngegg-1.png" alt="https://www.pngegg.com/en/png-zquqj/download"/>
                                </div>
                                <div class="px-7 mt-20">
                                    <h1 class="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">02.</h1>
                                    <h2 class="text-1xl mt-4 font-bold">Lounge Chair</h2>
                                    <p class="mt-2 opacity-60 group-hover:opacity-70 ">Comfortable collection of perfect lounge chairs</p>
                                </div>
                            </div>
                        </div>
                        <div class="border-r border-gray-300 mx-3 lg:pl-20">
                            <div class=" py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                                <div>
                                    <div class="w-4 h-1/5 bg-red-50	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50"></div>
                                    <img src="https://i.ibb.co/MgnH44p/pngegg-2.png" alt="https://www.pngegg.com/en/png-epwii/download"/>
                                </div>
                                <div class="px-7 mt-5">
                                    <h1 class="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">03.</h1>
                                    <h2 class="text-1xl mt-4 font-bold">Scandinavia Couch</h2>
                                    <p class="mt-2 opacity-60 group-hover:opacity-70 ">Best selection of scandinavia couch for your home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics