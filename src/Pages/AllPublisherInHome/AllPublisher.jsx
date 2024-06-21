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
                <div className="w-full px-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People" className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            {publishers.map((publisher) => (
                                <div key={publisher.id} role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded border overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src={publisher.image} alt={`Display Picture of ${publisher.name}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16 pb-5">
                                            <h1 className="font-bold text-3xl text-center mb-1 text-[#E3963E]">{publisher.name}</h1>
                                           
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPublisher;
