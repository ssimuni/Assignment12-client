import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/SectionTitle';
import CountUp from 'react-countup';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const NewStat = () => {

    const axiosSecure = useAxiosPublic();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => axiosSecure.get('/users').then((res) => res.data),
        refetchInterval: 6000,
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
            <section className="h-screen bg-cover mb-10 bg-fixed"
                style={{
                    backgroundImage: 'url(statb.jpg)',
                }}
            >

                <main className="lg:flex flex-col md:flex-row ">
                    <section className="w-[350px] mx-auto md:mx-2 md:w-[450px] pl-12  h-auto p-5 md:mt-36  ">

                        <h2 className="text-2xl text-white font-bold">“Somebody who only reads newspapers and at best books of contemporary authors looks to me like an extremely near-sighted person who scorns eyeglasses. He is completely dependent on the prejudices and fashions of his times, since he never gets to see or hear anything else.”    </h2>

                        <h1 className="text-sm mt-10 font-extrabold ml-10 capitalize text-white __classNameName_a3b678">Albert Einstein</h1>
                    </section>
                    <section className="@container relative flex flex-col flex-1 gap-5  h-[280px] mt-3 md:mt-40 p-5 rounded-md  mx-5 bg-black/50 ">
                        <div className="w-full h-60 grid gap-4 @xs:grid-cols-1 @md:grid-cols-2 md:grid-cols-3 @xl:grid-cols-4  overflow-hidden ">


                            <div className="h-60 w-full rounded-md bg-cover bg-center relative" style={{ backgroundImage: 'url(11.jpg)' }}>
                                <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                                <div className="px-7 mt-10 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={allUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold">Our All Users</h2>
                                </div>
                            </div>




                            <div className="h-60 w-full rounded-md bg-cover bg-center relative" style={{ backgroundImage: 'url(22.jpg)' }}>
                                <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                                <div className="px-7 mt-10 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={regularUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold ">Our Regular Users</h2>
                                </div>
                            </div>



                            <div className="h-60 w-full rounded-md bg-cover bg-center relative" style={{ backgroundImage: 'url(33.jpg)' }}>
                                <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                                <div className="lg:px-7 mt-10 text-white relative">
                                    <h1 className="text-center flex justify-center place-content-center mx-auto text-5xl font-bold group-hover:text-[#E3963E] transition ease-out duration-300">
                                        <CountUp end={premiumUsersCount} duration={3} />
                                    </h1>
                                    <h2 className="text-3xl text-center mt-4 font-bold">Our Premium Users</h2>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </section>
        </div>
    )
}

export default NewStat