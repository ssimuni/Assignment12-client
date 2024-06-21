import React from 'react'
import { Link } from 'react-router-dom';

const AllArticlesCard = ({ article }) => {


    const { _id, image, title, tags, publisher, description } = article;

    const truncateDescription = (desc, wordLimit) => {
        const words = desc.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : desc;
    };

    return (
        <div>

            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div style={{ backgroundImage: `url(${image})` }}
                    class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="p-2 text-center font-bold uppercase tracking-wide text-gray-800">{title}</div>
                    <div class="pt-1 pb-2 text-center font-semibold text-s text-gray-800">{publisher}</div>
                    <div class=" py-2 px-3 bg-[#f5b872]">
                        <h1 class="mb-3 text-white text-center">{truncateDescription(description, 15)}</h1>
                        <Link className="mx-auto flex justify-center text-center border uppercase text-sm font-bold bg-opacity-40 text-gray-100  mt-3 p-2 rounded-lg hover:bg-orange-400" to={`/details/${_id}`}>
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllArticlesCard