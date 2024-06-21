import React from 'react';
import { Link } from 'react-router-dom';

const PremiumCard = ({ article }) => {
    const { _id, image, title, tags, publisher, description } = article;

    const truncateDescription = (desc, wordLimit) => {
        const words = desc.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : desc;
    };

    return (

        <div class="mt-5 flex justify-center items-center">
            <div class="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div>
                    <div className='flex justify-between'>
                        <Link to={`/details/${_id}`} class=" mx-3 flex justify-center text-center items-center bg-[#E3963E] text-white px-3 rounded-lg text-sm uppercase font-semibold ">
                            Details
                        </Link>
                        <div class="mx-3 px-3 h-5 text-center text-white mt-3 italic  bg-green-500 rounded-full text-xs">Premium</div>
                    </div>
                    <h1 class="text-2xl mt-2 ml-4 font-bold cursor-pointer transition duration-100 text-[#E3963E]">{title}</h1>
                    <p class="ml-4 mt-1 mb-2 text-gray-700 font-bold cursor-pointer">{publisher}</p>
                </div>
                <img class="w-full h-60 cursor-pointer" src={image} alt="" />
                <div class="flex p-4 justify-between">
                    <div class="flex items-center space-x-2">

                        <h2 class="text-gray-800 cursor-pointer">{truncateDescription(description, 15)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumCard;
