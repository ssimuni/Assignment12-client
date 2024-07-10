import React from 'react';
import { Link } from 'react-router-dom';
import usePremium from '../../Hooks/usePremium';

const PremiumCard = ({ article }) => {
    const { _id, image, title, tags, publisher, description } = article;
    const [isPremium, refetch] = usePremium();

    const truncateDescription = (desc, wordLimit) => {
        const words = desc.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : desc;
    };

    return (
        <div className="mt-5 flex justify-center items-center">
            <div className="max-w-xs container bg-white rounded-xl mb-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div>
                    <div className='flex justify-between'>
                        {isPremium ? (
                            <Link to={`/details/${_id}`} className="mx-3 flex justify-center text-center items-center bg-[#E3963E] text-white px-3 rounded-lg text-sm uppercase font-semibold">
                                Details
                            </Link>
                        ) : (
                            <button disabled className="mx-3 flex justify-center text-center items-center bg-[#ccb79f] text-white px-3 rounded-lg text-sm uppercase font-semibold cursor-not-allowed">
                                Details
                            </button>
                        )}
                        <div className="mx-3 px-3 h-5 text-center text-white mt-3 italic bg-green-500 rounded-full text-xs">Premium</div>
                    </div>
                    <h1 className="text-2xl mt-2 ml-4 font-bold cursor-pointer transition duration-100 text-[#E3963E]">{title}</h1>
                    <p className="ml-4 mt-1 mb-2 text-gray-700 font-bold cursor-pointer">{publisher}</p>
                </div>
                <img className="w-full h-60 cursor-pointer" src={image} alt="" />
                <div className="flex p-4 justify-between">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-gray-800 cursor-pointer">{truncateDescription(description, 15)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumCard;
