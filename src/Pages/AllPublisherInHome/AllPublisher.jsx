import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import usePublisher from '../../Hooks/usePublisher';

const AllPublisher = () => {
    const [publishers, refetch] = usePublisher();

    return (
        <div>
            <div className="mb-16 dark:bg-white">
                <div className="container flex justify-center mx-auto pt-16">
                    <SectionTitle heading={"All Publishers"} subHeading={"Discover Content from All Our Esteemed Publishers"}></SectionTitle>
                </div>
                <div>
                    <div className="grid gap-10 mx-auto lg:max-w-screen-lg grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {publishers.map((publisher) => (
                            <div key={publisher.id} role="listitem" className="flex flex-col items-center lg:mt-16 lg:mb-32 sm:mb-24">
                                <img
                                    className="object-cover w-24 h-24 mb-4 rounded-full shadow"
                                    src={publisher.image}
                                    alt={publisher.name}
                                />
                                <div className="flex flex-col items-center">
                                    <p className="text-lg font-bold text-center">{publisher.name}</p>
                                    <p className="text-sm text-gray-800">{publisher.email}</p>
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
