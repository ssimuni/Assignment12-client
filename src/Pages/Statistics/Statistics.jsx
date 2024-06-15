import React from 'react'
import SectionTitle from '../../Components/SectionTitle'

const Statistics = () => {
    return (
        <div>
            <SectionTitle heading={"Our Users"} subHeading={"Insights into Our User Base"}></SectionTitle>

            <div class="h-full">
                <div class="container mx-auto  lg:px-20" >
                    <div class='grid grid-cols-3 h-full pb-40'>


                        <div class=" mx-3 lg:pl-20">
                            <div style={{
                                backgroundImage: 'url(stat1.jpg)',
                                position: 'relative',
                            }} class="bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 mt-72 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">


                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                                }} class="overlay group-hover:bg-opacity-70 transition ease-out duration-300"></div>

                                <div class="px-7 mt-20 text-white relative">
                                    <h1 class="text-4xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">01.</h1>
                                    <h2 class="text-2xl mt-4 font-bold">Our All Users</h2>

                                </div>
                            </div>
                        </div>



                        <div class=" mx-3 lg:pl-20">
                            <div style={{
                                backgroundImage: 'url(stat1.jpg)',
                                position: 'relative',
                            }} class="mt-32 bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">


                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                                }} class="overlay group-hover:bg-opacity-70 transition ease-out duration-300"></div>

                                <div class="px-7 mt-20 text-white relative">
                                    <h1 class="text-4xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">01.</h1>
                                    <h2 class="text-2xl mt-4 font-bold">Our Regular Users</h2>

                                </div>
                            </div>
                        </div>


                        <div class="mx-3 lg:pl-20">
                            <div style={{
                                backgroundImage: 'url(stat1.jpg)',
                                position: 'relative',
                            }} class="bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 mt-5 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">


                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                                }} class="overlay group-hover:bg-opacity-70 transition ease-out duration-300"></div>

                                <div class="px-7 mt-20 text-white relative">
                                    <h1 class="text-4xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">01.</h1>
                                    <h2 class="text-2xl mt-4 font-bold">Our Premium Users</h2>

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