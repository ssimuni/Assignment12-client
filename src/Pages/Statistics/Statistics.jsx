import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/SectionTitle';
import CountUp from 'react-countup';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Statistics = () => {
    const axiosSecure = useAxiosPublic();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => axiosSecure.get('/users').then((res) => res.data),
    });

    const [allUsersCount, setAllUsersCount] = useState(0);
    const [regularUsersCount, setRegularUsersCount] = useState(0);
    const [premiumUsersCount, setPremiumUsersCount] = useState(0);

    useEffect(() => {
        if (users && users.length > 0) {
            setAllUsersCount(users.length);
            const regularUsers = users.filter(user => !user.premiumTaken);
            setRegularUsersCount(regularUsers.length);
            setPremiumUsersCount(users.length - regularUsers.length);
        }
    }, [users]);

    return (
        <div>
            <SectionTitle heading={"Our Users"} subHeading={"Insights into Our User Base"} />

            <div className="h-full">
                <div className="container mx-auto lg:px-20">
                    <div className='grid grid-cols-3 h-full pb-40'>
                        <div className="mx-3 lg:pl-20">
                            <div
                                style={{
                                    backgroundImage: 'url(stat1.jpg)',
                                    position: 'relative',
                                }}
                                className="bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 mt-72 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300"
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    }}
                                    className="overlay group-hover:bg-opacity-70 transition ease-out duration-300"
                                ></div>

                                <div className="px-7 mt-20 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={allUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold ">Our All Users</h2>
                                </div>
                            </div>
                        </div>

                        <div className="mx-3 lg:pl-20">
                            <div
                                style={{
                                    backgroundImage: 'url(stat1.jpg)',
                                    position: 'relative',
                                }}
                                className="mt-32 bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300"
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    }}
                                    className="overlay group-hover:bg-opacity-70 transition ease-out duration-300"
                                ></div>

                                <div className="px-7 mt-20 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={regularUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold ">Our Regular Users</h2>
                                </div>
                            </div>
                        </div>

                        <div className="mx-3 lg:pl-20">
                            <div
                                style={{
                                    backgroundImage: 'url(stat1.jpg)',
                                    position: 'relative',
                                }}
                                className="bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 py-10 pb-3 mt-5 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300"
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    }}
                                    className="overlay group-hover:bg-opacity-70 transition ease-out duration-300"
                                ></div>

                                <div className="px-7 mt-20 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={premiumUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold">Our Premium Users</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
