import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import usePublisher from '../../Hooks/usePublisher';

const AllPublisher = () => {
    const [publishers, refetch] = usePublisher();

    return (
        <div>
            <div className="mb-16">
                <div className="container flex justify-center mx-auto pt-16">
                    <SectionTitle heading={"All Publishers"} subHeading={"Discover Content from All Our Esteemed Publishers"}></SectionTitle>
                </div>
                <div className="">
                    <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">

                        {publishers.map((publisher) => (
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-1/5">
                                <div key={publisher.id} className="flex flex-col items-center">
                                    <img
                                        className="object-cover w-24 h-20 mb-2 rounded-full shadow"
                                        src={publisher.image}
                                        alt="Person"
                                    />
                                    <div className="flex flex-col items-center">
                                        <p className="text-lg font-bold text-center">{publisher.name}</p>
                                        <p className="text-sm text-gray-800">{publisher.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllPublisher;
